import React from "react";
import { useSelector } from "react-redux";
import StyledWishlist from "../Styles/StyledWishlist";
import { Link } from "react-router-dom";
import arrowIcon from "../../public/Images/Icon/rightArrow.svg";
import { Helmet } from "react-helmet";

export const WishList = () => {
  const CardData = useSelector((state) => state.wishList.wishListItems);
  console.log(CardData);
  return (
    <StyledWishlist>
      <Helmet>
        <title>Minimog | Wishlist</title>
      </Helmet>
      <div className="container">
        <div className="collection_header">
          <h1 className="collection_header_title">Wishlist</h1>
          <div className="collection_header_links">
            <Link className="link" to="/">
              Home
            </Link>
            <img
              className="collection_header_links_icon"
              src={arrowIcon}
              alt=""
            />
            <span className="collection_header_links_text">Wishlist</span>
          </div>
        </div>
      </div>
    </StyledWishlist>
  );
};
