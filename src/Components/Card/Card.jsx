import React from "react";
import { Link } from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { CgArrowsExchangeAlt } from "react-icons/cg";

import { StyledCard } from "./Style";

export const Card = ({
  item: {
    mainImg,
    hoverImg,
    subtitle,
    title,
    btntext,
    disPrice,
    price,
    saleRate,
    to,
  },
}) => {
  return (
    <StyledCard>
      <div className="card-top">
        {saleRate ? (
          <div className="position sale_badge">
            <span className="sale_rate">{saleRate}</span>
          </div>
        ) : (
          ""
        )}

        <div className="thumbnail">
          <Link to={`/products/${to}`}>
            {/* Card images */}
            <div className="card-main-img">
              <img src={mainImg} alt="" />
            </div>

            <div className="card-hover-img">
              <img src={hoverImg} alt="" />
            </div>
          </Link>
          {/* Card icon */}
          <div className="card-icon">
            <Link to="wishlist">
              <div className="icon">
                <AiOutlineStar />
                <span className="tooltiptext Wishlist">Add to Wishlist</span>
              </div>
            </Link>

            <div className="icon">
              <CgArrowsExchangeAlt />
              <span className="tooltiptext Compare">Compare</span>
            </div>
            <div className="icon">
              <BiShowAlt />
              <span className="tooltiptext Quick">Quick view</span>
            </div>
          </div>
          <div className="cta">
            <Link to={`/products/${to}`}>{btntext}</Link>
          </div>
        </div>
      </div>
      {/* Card text */}
      <div className="card-bottom">
        <h4 className="subtitle">
          <Link to={`/products/${to}`}>{subtitle}</Link>
        </h4>
        <h3 className="title">
          <Link to={`/products/${to}`}>{title}</Link>
        </h3>
        {disPrice ? (
          <del>
            <span className="dis-price">{disPrice}</span>
          </del>
        ) : (
          ""
        )}
        <span className="main-price">${price}.00</span>
      </div>
    </StyledCard>
  );
};
