import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StyledShop from "../Styles/StyledShop";
import { Card } from "./../Components/Card/Card";
import arrowIcon from "../../public/Images/Icon/rightArrow.svg";

export const Shop = () => {
  const data = useSelector((state) => state.product.allProducts);
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
          <div className="card_container">
            {data.map((item, i) => {
              return <Card key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
    </StyledShop>
  );
};
