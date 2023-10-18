import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import StyledShop from "../Styles/StyledShop";
import {Card} from "./../Components/Card/Card";
import arrowIcon from "../../public/Images/Icon/rightArrow.svg";
import {useQuery} from "react-query";
import {allProducts} from "./../api/api";
import ReactLoading from "react-loading";
import AppLayout from "../Components/AppLayout/AppLayout";

export const Shop = () => {
    // const data = useSelector((state) => state.product.allProducts);

    const {data, isLoading} = useQuery({
        queryKey: "products",
        queryFn: allProducts,
        refetchOnWindowFocus: false,
    });

    return (
            <StyledShop>
                <Helmet>
                    <title>Minimog | Shop</title>
                </Helmet>
                <div className="container">
                    <div className="collection_header">
                        <h1 className="collection_header_title">Fashion</h1>
                        <div className="collection_header_links">
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <img
                                className="collection_header_links_icon"
                                src={arrowIcon}
                                alt=""
                            />
                            <span className="collection_header_links_text">Fashion</span>
                        </div>
                    </div>
                    <div className="">
                        {isLoading ? (
                            <div className="spinningBubbles">
                                <ReactLoading
                                    type={"spinningBubbles"}
                                    color={"#000"}
                                    height={80}
                                    width={80}
                                />
                            </div>
                        ) : (
                            <div className="card_container">
                                {data.map((item) => {
                                    return <Card key={item.id} item={item}/>;
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </StyledShop>
    );
};
