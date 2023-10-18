import React from "react";
import {Helmet} from "react-helmet";
import AppLayout from "../Components/AppLayout/AppLayout";

export const Products = () => {
    return (
        <>
            <Helmet>
                <title>Minimog | Products</title>
            </Helmet>
            <div className="container">
                <h1>Products</h1>
            </div>
        </>

    );
};
