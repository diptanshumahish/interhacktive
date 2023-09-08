import { AppProps } from "next/app";
type PageProps = AppProps["pageProps"];
interface _ServerProps<P = {}, SP = {}> {
  params: P;
  searchParams: SP;
}

export type ServerProps<P, SP> = _ServerProps<P, SP>;
