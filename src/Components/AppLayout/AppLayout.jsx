import {Header} from "../Header/Header";
import React from "react";
import {Footer} from "../Footer/Footer";

export default function AppLayout ({children}){
    return <>
        <Header />
        {children}
        <Footer />
    </>
}