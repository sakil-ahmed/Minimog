import React from "react";
import StyledCheckout from "../Styles/StyledCheckout";
import arrowIcon from "../../public/Images/Icon/rightArrow.svg";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <StyledCheckout>
      <div className="container">
        <div className="collection_header">
          <h1 className="collection_header_title">Checkout</h1>
          <div className="collection_header_links">
            <Link className="link" to="/">
              Home
            </Link>
            <img
              className="collection_header_links_icon"
              src={arrowIcon}
              alt=""
            />
            <span className="collection_header_links_text">Checkout</span>
          </div>
        </div>
      </div>
    </StyledCheckout>
  );
};
