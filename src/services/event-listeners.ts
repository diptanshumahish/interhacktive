import { useState, useEffect } from "react";

type V = Window | Document | HTMLElement;
type T<X> = X extends Window
  ? WindowEventMap
  : X extends Document
  ? DocumentEventMap
  : HTMLElementEventMap;
type R = keyof T<V>;

export function addEventListener(
  target: V,
  type: R,
  callback: (e: T<V>[R]) => void,
  options?: boolean | AddEventListenerOptions | undefined
) {
  target.addEventListener(type, callback, options);

  return () => {
    target.removeEventListener(type, callback, options);
  };
}

export function useScreenListener() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    const cleanup = addEventListener(window, "resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });

    return () => {
      cleanup();
    };
  }, []);

  return { height, width };
}

export function convertEventToAsync(target: V, type: R) {
  return new Promise<{ event: T<V>[R]; cleanup: () => void }>((resolve) => {
    const cleanup = addEventListener(target, type, (e) => {
      resolve({
        event: e,
        cleanup,
      });
    });
  });
}
