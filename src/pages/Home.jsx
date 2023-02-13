import React from "react";
import { Card } from "../Components/Card/Card";
import elementor_img from "./../../public/Images/h_cta.jpg";
import { Link } from "react-router-dom";
import { StyledHome } from "../Styles/StyledHome";
import { CatagoriesCard } from "./../Components/CatagoriesCard/CatagoriesCard";
import { TimerCoundown } from "../Components/Timer/TimerCoundown";
import { HeroSlider } from "../Components/HeroSlider/HeroSlider";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export const Home = () => {
  const CardData = useSelector((state) => state.product.allProducts);
  return (
    <StyledHome>
      <Helmet>
        <title>Minimog | Home</title>
      </Helmet>
      <div className="hero_section">
        <HeroSlider />
      </div>

      <div className="container">
        <div className="product_card_section">
          <div className="section_title">
            <h2 className="title">This week’s highlights</h2>
          </div>
          <div className="card_container">
            {CardData.slice(0, 4).map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
          <div className="product_card_cta">
            <Link to="/shop" className="shop_now_btn btn">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* Elementor section */}
      <div className="container">
        <div className="elementor_section">
          <div className="elementor_left_column">
            <img className="elementor_left_img" src={elementor_img} alt="" />
          </div>
          <div className="elementor_right_column">
            <h2 className="elementor_heading_title">
              Poplin Top With Ruffle Trim
            </h2>
            <p className="heading_description">
              We believe in crafting pieces where sustainability and style go
              hand in hand. Made from materials like recycled cashmere and sust
            </p>
            <Link to="/" className="elementor_section_btn">
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
      {/* Elementor section */}
      {/* Featured Categories Section */}
      <div className="featured_categories_section">
        <div className="container">
          <div className="row">
            <div className="section_title">
              <h2 className="title">Featured Categories</h2>
            </div>
            <div className="slider">
              <CatagoriesCard />
            </div>
          </div>
        </div>
      </div>
      {/* Featured Categories Section */}
      {/* Coundown Timer section  */}
      <div className="coundown_timer_section">
        <div className="container">
          <div className="row">
            <div className="left_column"></div>
            <div className="right_column">
              <TimerCoundown />
            </div>
          </div>
        </div>
      </div>
      <div className="section_out_content">
        <TimerCoundown />
      </div>
      {/* Coundown Timer section */}
    </StyledHome>
  );
};
