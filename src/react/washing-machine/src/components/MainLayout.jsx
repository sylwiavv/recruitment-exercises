import React from "react";
import {Navigation} from "./Navigation"
import {Reservations} from "./index";

export const MainLayout = ({ children }) => (
    <div className="flex min-h-screen truncate">
        <div className="fixed w-[200px]">
            <Navigation />
        </div>
        <div className="ml-[200px] flex w-full flex-col px-10 py-5">
            {/*<Navbar />*/}
            {/*{children}*/}
            <Reservations />
        </div>
    </div>
)