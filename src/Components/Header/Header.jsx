import React, { useState, useRef, useEffect } from "react";
import { StyledHeader } from "./Style";
import { ROUTES } from "./../../routes";
import { CustomNavLink } from "./CustomNavLink";
import { Link } from "react-router-dom";
import { HeaderTop } from "./HeaderTop";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Logo from "../../../public/Images/dark-logo.png";
import icon1 from "../../../public/Images/Icon/login.svg";
import icon2 from "../../../public/Images/Icon/search.svg";
import icon3 from "../../../public/Images/Icon/star.svg";
import icon4 from "../../../public/Images/Icon/cart.svg";
import cartEmpty from "./../../../public/Images/empty-cart.png";
import { SearchMenu } from "./SearchMenu/SearchMenu";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { ForgetPass } from "./Login/ForgetPass";

export const Header = () => {
  const ref = useRef(null);

  /* A state that is used to toggle the class of the element. */
  // Mobile Menu
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => setIsActive(!isActive);
  // Shoping Cart
  const [isActiveCart, setIsActiveCart] = useState(false);
  const handleClickCart = (event) => setIsActiveCart(!isActiveCart);
  // Search menu
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const handleClickSearch = (event) => setIsActiveSearch(!isActiveSearch);
  // login
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const handleClickLogin = (event) => setIsActiveLogin(!isActiveLogin);
  // Reset Password
  const [isActiveReset, setIsActiveReset] = useState(false);
  const handleClickReset = (event) => setIsActiveReset(!isActiveReset);
  // Register
  const [isActiveRegister, setIsActiveRegister] = useState(false);
  const handleClickRegister = (event) => setIsActiveRegister(!isActiveRegister);

  /* Checking if any of the states are true, if they are it will add a margin to the body. */
  useEffect(() => {
    if (isActive === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else if (isActiveCart === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else if (isActiveSearch === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else if (isActiveLogin === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else if (isActiveRegister === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else if (isActiveReset === true) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0";
    }
    /**
     * If the screen is less than 768px, then the body margin-right is set to 0.
     */
    const mobileDevice = (mobile) => {
      if (mobile.matches) {
        document.body.style.marginRight = "0";
      }
    };
    let mobile = window.matchMedia("(max-width: 768px)");
    mobileDevice(mobile);
    mobile.addEventListener("", mobileDevice);
  }, [
    isActive,
    isActiveLogin,
    isActiveCart,
    isActiveSearch,
    isActiveRegister,
    isActiveReset,
  ]);

  return (
    <StyledHeader>
      <HeaderTop
        text="
	COOL NEW COLOR: STERLING ?????? SO WORTH IT"
        type="home-text"
      />
      <div className="container">
        <div className="wrapper">
          {/* Header left */}
          <div className="left">
            <div
              className="mobile_menu"
              onClick={() => {
                handleClick();
                // handleScroll();
              }}
            >
              <AiOutlineMenu size="22px" color="#000" />
            </div>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          {/* Header middle */}
          <div
            className={
              isActive ? "open_mobile_menu middle" : "close_mobile_menu middle"
            }
          >
            <div className="mobile_menu_inner">
              <nav>
                <ul>
                  {ROUTES.map(({ to, name }) => (
                    <li key={name}>
                      <CustomNavLink linkTo={to} linkName={name} />
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="account">
                <div className="account_icon">
                  <AiOutlineUser size="20px" />
                  My Account
                </div>
                <div className="account_btn_grp">
                  <button className="btn login" onClick={handleClickLogin}>
                    Log in
                  </button>
                  <button
                    className="btn register"
                    onClick={handleClickRegister}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div
              className="mobile_menu_close"
              onClick={() => {
                handleClick();
                // handleScroll();
              }}
            >
              <AiOutlineClose color="#fff" size="13px" fontWeight="900" />
            </div>
          </div>
          {/* Header right */}
          <div className="right">
            <div
              className="header-icon tooltip display_none"
              onClick={handleClickLogin}
            >
              <img src={icon1} alt="User Icon" />

              <span className="tooltiptext">Log in</span>
            </div>
            <div className="header-icon tooltip" onClick={handleClickSearch}>
              <img src={icon2} alt="Search Icon " />

              <span className="tooltiptext">Search</span>
            </div>
            <div className="header-icon tooltip display_none">
              <Link to="wishlist">
                <img src={icon3} alt="Wishlist Icon" />
                <span className="icon-badge">0</span>
              </Link>
              <span className="tooltiptext">Wishlist</span>
            </div>
            <div className="header-icon tooltip" onClick={handleClickCart}>
              <img src={icon4} alt="Cart Icon" />
              <span className="icon-badge">0</span>

              <span className="tooltiptext">Cart</span>
            </div>
          </div>
        </div>
        {/* Search Menu */}

        {/* Popup Login  form */}

        <div
          ref={ref}
          className={
            isActiveLogin
              ? "popup_login_container open_login"
              : "popup_login_container"
          }
        >
          <Login
            handleClickReset={handleClickReset}
            handleClickLogin={handleClickLogin}
            handleClickRegister={handleClickRegister}
          />
        </div>
        {/* Popup Login  form */}
        {/* Forget Password */}
        <div
          className={
            isActiveReset ? "password_reset open_popup" : "password_reset"
          }
        >
          <ForgetPass
            handleClickReset={handleClickReset}
            handleClickLogin={handleClickLogin}
          />
        </div>
        {/* Forget Password */}
        {/* Popup Register form */}
        <div
          className={
            isActiveRegister
              ? "popup_register_container open_register"
              : "popup_register_container"
          }
        >
          <Register
            handleClickRegister={handleClickRegister}
            handleClickLogin={handleClickLogin}
          />
        </div>
        {/* Popup Register form */}

        {/* "popup_search_menu" */}
        <div
          className={
            isActiveSearch ? "popup_search_menu opended" : "popup_search_menu"
          }
        >
          <SearchMenu
            cart={handleClickCart}
            search={handleClickSearch}
            login={handleClickLogin}
          />
        </div>

        {/* Search Menu */}

        {/* Shoping Card */}
        <div
          className={isActiveCart ? "popup_fly_cart opended" : "popup_fly_cart"}
        >
          <div className="popup_cart_inner">
            {/* Close btn */}
            <div className="close_cart_btn" onClick={handleClickCart}>
              <IoClose />
            </div>
            {/* Close btn */}

            <div className="fly_cart_header">
              <h3 className="fly_cart_title">Shopping Cart</h3>
            </div>
            <div className="fly_cart_body scroll_y ps">
              <div className="empty_cart_icon">
                <img src={cartEmpty} alt="Cart empty" />
              </div>
              <h2 className="empty_cart_heading">
                Your cart is currently empty.
              </h2>
              <p className="empty_cart_text">
                You may check out all the available products and buy some in the
                shop.
              </p>
              <div className="return_to_shop">
                <Link
                  to="shop"
                  onClick={() => {
                    handleClickCart();
                  }}
                >
                  Return to shop
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Shoping Card */}
      </div>
    </StyledHeader>
  );
};
