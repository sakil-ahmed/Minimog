import React from "react";
import img from "./../../public/Images/Icon/faceIcon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../Styles/Theme";
import { media } from "../Styles/Responsive";

// Styled
const Styled404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 128px 0;
  background-color: #f5f1ed;
  ${media.up("md")} {
    padding: 192px 0;
  }
  .icon {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 16px;
  }
  h1 {
    font-weight: 500;
    text-align: center;
    font-size: 1.875rem;
    line-height: 2.25rem;
    ${media.up("md")} {
      line-height: 1.25;
      font-size: 3.75rem;
    }
  }
  p {
    text-align: center;
    line-height: 1.25;
    font-weight: 300;
    color: #000000;
    margin-bottom: 32px;
    font-size: 1.875rem;
    ${media.up("md")} {
      font-size: 3.75rem;
    }
  }
  .btn_container {
    text-align: center;
  }
  .home_btn {
    padding: 10px 33px;
    min-height: 45px;
    border: 1px solid ${THEME.colors.primary};
    border-radius: 5px;
    font-weight: 500;
    background-color: ${THEME.colors.primary};
    color: ${THEME.colors.light};
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    width: fit-content;
    display: inline-block;
    ${media.up("md")} {
      width: fit-content;
    }
    &:hover {
      box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Styled404>
      <div className="container">
        <img className="icon" src={img} alt="" />
        <h1 className="">Oops!</h1>
        <p className="">Page not found!</p>
        <div className="btn_container">
          <Link to="/" className="home_btn btn">
            Go to Home
          </Link>
        </div>
      </div>
    </Styled404>
  );
};
