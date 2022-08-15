import React, { useState } from 'react'
import { StyledHeader } from './Style'
import Logo from "../../../public/Images/dark-logo.png"
import icon1 from "../../../public/Images/Icon/login.svg"
import icon2 from "../../../public/Images/Icon/search.svg"
import icon3 from "../../../public/Images/Icon/star.svg"
import icon4 from "../../../public/Images/Icon/cart.svg"
import { ROUTES } from './../../routes';
import { CustomNavLink } from './CustomNavLink';
import { Link } from 'react-router-dom';
import { HeaderTop } from './HeaderTop'
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"




export const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
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
                                    <button className="btn login">Log in</button>
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
                        <div className="header-icon tooltip display_none">
                            <Link to={"/"}>
                                <img src={icon1} alt="" />
                            </Link>
                            <span className="tooltiptext">Log in</span>
                        </div>
                        <div className="header-icon tooltip">
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
                        <div className="header-icon tooltip">
                            <Link to={"/"}>
                                <img src={icon4} alt="" />
                                <span className="icon-badge">0</span>
                            </Link>
                            <span className="tooltiptext">Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}
