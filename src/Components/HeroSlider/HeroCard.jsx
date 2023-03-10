import React from "react";
import { StyledHeroCard } from "./StyledHeroCard";
import { Link } from "react-router-dom";

export const HeroCard = ({ item: { title, img } }) => {
  return (
    <StyledHeroCard>
      <div className="container">
        <div className="hero_content">
          <div data-aos="fade-down" className="">
            <h4 className="sub_title">New Arrivals</h4>
            <h1 className="title">{title}</h1>
            <Link className="shop_now_btn" to="/shop">
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </StyledHeroCard>
  );
};
