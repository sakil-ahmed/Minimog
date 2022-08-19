import React, { useState } from 'react'
import { StyledHeader } from './Style'
import { ROUTES } from './../../routes';
import { CustomNavLink } from './CustomNavLink';
import { Link } from 'react-router-dom';
import { HeaderTop } from './HeaderTop'

import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { IoClose } from "react-icons/io5"
import Logo from "../../../public/Images/dark-logo.png"
import icon1 from "../../../public/Images/Icon/login.svg"
import icon2 from "../../../public/Images/Icon/search.svg"
import icon3 from "../../../public/Images/Icon/star.svg"
import icon4 from "../../../public/Images/Icon/cart.svg"
import cartEmpty from "./../../../public/Images/empty-cart.png"
import { SearchMenu } from './SearchMenu/SearchMenu';
import { Login } from './Login/Login';





export const Header = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActiveCart, setIsActiveCart] = useState(false);
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [isActiveLogin, setIsActiveLogin] = useState(false);

    // Mobile Menu
    const handleClick = event => {
       
        setIsActive(current => !current);
    };

    // Shoping Cart
    const handleClickCart = event => {
        
        setIsActiveCart(current => !current);
    };
    // Search menu
    const handleClickSearch = event => {
        
        setIsActiveSearch(current => !current);
    };
    // login
    const handleClickLogin = event => {
        
        setIsActiveLogin(current => !current);
    };

    return (
        <StyledHeader>
            <HeaderTop text="
	COOL NEW COLOR: STERLING ☁️ SO WORTH IT" type="home-text" />
            <div className="container">
                <div className="wrapper">
                    {/* Header left */}
                    <div className="left">
                        <div className="mobile_menu" onClick={handleClick}>
                            <AiOutlineMenu size="22px" color="#000" />
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    {/* Header middle */}
                    <div className={isActive ? "open_mobile_menu middle" : "close_mobile_menu middle"}>
                        <div className="mobile_menu_inner">
                            <nav>
                                <ul onClick={handleClick}>
                                    {
                                        ROUTES.map(({ to, name }) => (
                                            <li key={name}>
                                                <CustomNavLink linkTo={to} linkName={name} />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                            <div className="account" onClick={handleClick}>
                                <div className="account_icon">
                                    <AiOutlineUser size="20px" />My Account
                                </div>
                                <div className="account_btn_grp">
                                    <button className="btn login" onClick={ handleClickLogin}>Log in</button>
                                    <button className="btn register">Register</button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile_menu_close" onClick={handleClick}>
                            <AiOutlineClose color="#fff" size="13px" fontWeight="900" />
                        </div>
                    </div>
                    {/* Header right */}
                    <div className="right">
                        <div className="header-icon tooltip display_none" onClick={handleClickLogin}>
                            <Link to={"/"}>
                                <img src={icon1} alt="" />
                            </Link>
                            <span className="tooltiptext">Log in</span>
                        </div>
                        <div className="header-icon tooltip" onClick={handleClickSearch}>
                            <Link to={"/"}>
                                <img src={icon2} alt="" />
                            </Link>
                            <span className="tooltiptext">Search</span>
                        </div>
                        <div className="header-icon tooltip display_none">
                            <Link to={"/"}>
                                <img src={icon3} alt="" />
                                <span className="icon-badge">0</span>
                            </Link>
                            <span className="tooltiptext">Wishlist</span>

                        </div>
                        <div className="header-icon tooltip" onClick={handleClickCart}>
                            <Link to={"/"}>
                                <img src={icon4} alt="" />
                                <span className="icon-badge">0</span>
                            </Link>
                            <span className="tooltiptext">Cart</span>
                        </div>
                    </div>
                    
                </div>
                {/* Search Menu */}

                {/* Popup Login  form */}

                <div className= {isActiveLogin ? "popup_login_container open_login": "popup_login_container"}>
                    <Login handleClickLogin={handleClickLogin}/>
                </div>
                {/* Popup Login  form */}

                {/* "popup_search_menu" */}
                    <div className={isActiveSearch ? "popup_search_menu opended" : "popup_search_menu"}>
                        <SearchMenu cart={handleClickCart} search={handleClickSearch}/>
                    </div>

                {/* Search Menu */}




                    {/* Shoping Card */}
                <div className={isActiveCart ? "popup_fly_cart opended" : "popup_fly_cart" }>
                        <div className="popup_cart_inner">
                            {/* Close btn */}
                            <div className="close_cart_btn" onClick={handleClickCart}>
                                <IoClose/>
                            </div>
                            {/* Close btn */}

                            <div className="fly_cart_header">
                                <h3 className="fly_cart_title">Shopping Cart</h3>
                            </div>
                            <div className="fly_cart_body scroll_y ps">
                                <div className="empty_cart_icon">
                                    <img src={cartEmpty} alt="Cart empty" />
                                </div>
                                <h2 className="empty_cart_heading">Your cart is currently empty.</h2>
                                <p className="empty_cart_text">You may check out all the available products and buy some in the shop.</p>
                                <div className="return_to_shop">
                                    <Link to="shop" onClick={()=>{handleClickCart();}}>Return to shop</Link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                     {/* Shoping Card */}
            </div>
        </StyledHeader>
    )
}
