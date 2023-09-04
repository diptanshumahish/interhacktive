import StateProvider from "@/state-management/Provider";
import { UserState } from "@/state-management/store/user.store";
import { setCookie } from "cookies-next";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// tokens? cookieeees
function saveUserData(data: UserState) {
    localStorage.setItem("user", JSON.stringify(data));
    setCookie("token", data.token);
}

export default function ClientProvider({ children }: React.PropsWithChildren) {
    return (
        <>
            <StateProvider
                listener={(data) => {
                    const user = data["user-slice"];
                    saveUserData(user);
                }}
            >
                {children}
            </StateProvider>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
