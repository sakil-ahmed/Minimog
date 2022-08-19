import React from 'react'
import { StyledSearchMenu } from './StyledSearchmenu'
import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import logo from "./../../../../public/Images/dark-logo.png"
import icon1 from "./../../../../public/Images/Icon/login.svg"
import icon2 from "./../../../../public/Images/Icon/star.svg"
import icon3 from "./../../../../public/Images/Icon/cart.svg"
import { Link } from 'react-router-dom';

export const SearchMenu = (props) => {

    const {cart , search} = props
    return (
        <StyledSearchMenu>
            <div className="search_close_icon" onClick={search}>
                <CgClose />
            </div>
            <div className="container">
            <div className="search_mobile_heading">
                        <h4 className="mobile_heading">Search our store</h4>
                    </div>
                <div className="search_menu_content">
                    <div className="search_menu_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="search_bar">
                        <form action="">
                            <input type="text" placeholder="Search products" />
                            <button className="search_btn" type="submit"><BiSearch/></button>
                        </form>
                    </div>
                    <div className="search_bar_icons">

                        <div className="header-icon tooltip">
                            <Link to={"/"}>
                                <img src={icon1} alt="" />
                            </Link>
                            <span className="tooltiptext">Log in</span>
                        </div>
                        <div className="header-icon tooltip">
                            <Link to={"/"}>
                                <img src={icon2} alt="" />
                                <span className="icon-badge">0</span>
                            </Link>
                            <span className="tooltiptext">Wishlist</span>

                        </div>
                        <div className="header-icon tooltip" onClick={cart}>
                            <Link to={"/"}>
                                <img src={icon3} alt="" />
                                <span className="icon-badge">0</span>
                            </Link>
                            <span className="tooltiptext">Cart</span>
                        </div>
                    </div>
                </div>
                <div className="search_menu_keyWord">
                    <span className="label">Popular Searches: </span>
                    <Link to="/">T-Shirt</Link>
                    <Link to="/">Blue</Link>
                    <Link to="/">Jacket</Link>
                </div>
            </div>
        </StyledSearchMenu>
    )
}
