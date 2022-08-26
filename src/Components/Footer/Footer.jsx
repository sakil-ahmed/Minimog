import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import payment from "../../../public/Images/payment.png";
import { StyledFooter } from "./Style";

export const Footer = () => {
  const [company, setCompany] = useState(false);
  const [information, setInformation] = useState(false);
  const [contact, setContact] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const companyClick = (event) => {
    setCompany((current) => !current);
  };

  const informationClick = (event) => {
    setInformation((current) => !current);
  };

  const contactClick = (event) => {
    setContact((current) => !current);
  };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="footer_top">
            {/* Company */}
            <div className="footer_top_content company">
              <h4 className="company_text heading_text" onClick={companyClick}>
                Company <FiChevronDown />
              </h4>
              <div className={company ? "company_item" : "hide_item"}>
                <p className="text">About Us</p>
                <p className="text">Contact</p>
                <p className="text">Shipping & Return</p>
                <p className="text">FAQ</p>
              </div>
            </div>
            {/* Company */}
            {/* information */}
            <div className="footer_top_content information">
              <h4
                className="company_text heading_text"
                onClick={informationClick}
              >
                Information <FiChevronDown />
              </h4>
              <div className={information ? "company_item" : "hide_item"}>
                <p className="text">My Account</p>
                <p className="text">Login</p>
                <p className="text">My Cart</p>
                <p className="text">Wishlist</p>
                <p className="text">Checkout</p>
              </div>
            </div>
            {/* information */}
            {/* contact */}
            <div className="footer_top_content contact">
              <h4 className="company_text heading_text" onClick={contactClick}>
                Contact <FiChevronDown />
              </h4>
              <div className={contact ? "company_item" : "hide_item"}>
                <p className="text">Customer Service</p>
                <p className="text">Store Locator</p>
                <p className="text">Wholesale</p>
                <p className="text">Career</p>
              </div>
            </div>
            {/* contact */}
            {/* collection */}
            <div className="footer_top_content collection">
              <h4 className="company_text heading_text" onClick={handleClick}>
                Collection <FiChevronDown />
              </h4>
              <div className={isActive ? "company_item" : "hide_item"}>
                <p className="text">Women</p>
                <p className="text">Man</p>
                <p className="text">Bestsellers</p>
                <p className="text">New Arrivals</p>
              </div>
            </div>
            {/* collection */}
            <div className="space"></div>
            {/* Gift ard */}
            <div className="footer_top_content gift_card_container">
              <div className="gift_card">
                <h4 className="right_text">GIFT CARDS</h4>
                <h2 className="right_heading_text">Give a Gift Today</h2>
              </div>
              <div className="social_media">
                <h4 className="right_text">SOCIAL MEDIA</h4>
                <h2 className="right_heading_text">Follow Ceremony</h2>
                <div className="social_media_icon">
                  <Link to="/">
                    <FaPinterestP />
                  </Link>
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="copy_text">© MINIMOG 2022</div>
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
