import styled from "styled-components";
import { THEME } from "./../../Styles/Theme";
import { media } from "./../../Styles/Responsive";
import cursorImg from "./../../../public/Images/light-close.png";

export const StyledHeader = styled.header`
  /* box-shadow: 4px 4px 8px rgba(0,0,0,.3); */
  /* box-shadow: 0 8px 20px 0 rgba(0,0,0,.1); */
  z-index: 999;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    min-height: 50px;
    ${media.up("md")} {
      min-height: 70px;
    }
  }
  /* Header left */
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .mobile_menu {
      display: inline-block;
      ${media.up("lg")} {
        display: none;
      }
    }

    .logo {
      width: 100px;
      ${media.up("sm")} {
        width: 120px;
      }
      ${media.up("lg")} {
        width: 145px;
      }
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
  /* Header Middle */
  .middle {
    transition: all 0.2s ease-in-out;
    ${media.up("lg")} {
      .mobile_menu_close {
        display: none;
      }
    }
    ${media.down("lg")} {
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${THEME.colors.mobileMenuBg};
      width: 100%;
      height: 100%;
      z-index: 999;
      display: flex;
      cursor: url(${cursorImg}) 16 16 pointer;

      &.open_mobile_menu {
        left: 0;
      }
      &.close_mobile_menu {
        left: -100%;
      }

      .mobile_menu_close {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .mobile_menu_inner {
        width: 340px;
        background-color: ${THEME.colors.light};
        padding: 20px 20px 20px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: default;
      }
    }
    .account {
      ${media.up("lg")} {
        display: none;
      }
      .account_icon {
        display: flex;
        align-items: center;
      }
      .account_btn_grp {
        margin-top: 12px;
        .btn {
          display: block;
          width: 100%;
          padding: 0 25px;
          min-height: 45px;
          border-radius: 5px;
          line-height: 23px;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .login {
          color: ${THEME.colors.light};
          background-color: ${THEME.colors.primary};
          margin-bottom: 12px;
        }
        .register {
          border: 1px solid ${THEME.colors.primary};
          background-color: transparent;
          color: ${THEME.colors.primary};
        }
      }
    }
    ul > li {
      list-style: none;
      padding: 13px 0;
      cursor: pointer;
      ${media.up("lg")} {
        padding: 24px 20px;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      ${media.up("lg")} {
        flex-direction: row;
      }

      a {
        text-decoration: none;
        line-height: 22px;
        font-weight: 500;
        font-style: normal;
        font-size: 16px;
        color: ${THEME.colors.primary};
        position: relative;
        &::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #000;
          transition: 0.3s;
        }
        &:hover::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
  .right {
    display: flex;

    .header-icon {
      padding: 0 14px;
      position: relative;
      cursor: pointer;

      img {
        transition: 0.3s;
        min-width: 22px;
        &:hover {
          opacity: 0.5;
        }
      }

      .icon-badge {
        position: absolute;
        font-weight: 700;
        font-size: 12px;
        padding: 0 3px;
        top: -11px;
        right: 0;
        background-color: ${THEME.colors.iconbg};
        border-radius: 22px;
        min-width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${THEME.colors.light};
      }
    }
    .display_none {
      display: none;
      ${media.up("md")} {
        display: inline-block;
      }
    }
    .tooltip {
      position: relative;
      &:hover {
        .tooltiptext {
          top: 130%;
          visibility: visible;
        }
      }
      .tooltiptext {
        visibility: hidden;
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        background: ${THEME.colors.primary};
        color: ${THEME.colors.light};
        padding: 5px 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        white-space: nowrap;
        border-radius: 3px;
        transition: 0.2s;
        z-index: 3;
      }
    }
  }

  /* Popup Login  form */
  .popup_login_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    cursor: url(${cursorImg}) 16 16, pointer;
    z-index: 9999999;
    color: ${THEME.colors.secondary};
    background: ${THEME.colors.mobileMenuBg};
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .open_login {
    visibility: visible;
    opacity: 1;
  }
  /* Popup Login  form */

  /* Reset password */
  .password_reset {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    cursor: url(${cursorImg}) 16 16, pointer;
    z-index: 9999999;
    color: ${THEME.colors.secondary};
    background: ${THEME.colors.mobileMenuBg};
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .open_popup {
    visibility: visible;
    opacity: 1;
  }

  /* Reset password */

  /* Popup Register Form */
  .popup_register_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    cursor: url(${cursorImg}) 16 16, pointer;
    z-index: 99999;
    color: ${THEME.colors.secondary};
    background: ${THEME.colors.mobileMenuBg};
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .open_register {
    visibility: visible;
    opacity: 1;
  }
  /* Popup Register Form */

  /* Search menu */
  .popup_search_menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: url(${cursorImg}) 16 16, pointer;
    z-index: 9999;
    color: ${THEME.colors.secondary};
    background: ${THEME.colors.mobileMenuBg};
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .opended {
    visibility: visible;
    opacity: 1;
  }
  /* Search menu */

  /* Cart pop up */

  .popup_fly_cart {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: url(${cursorImg}) 16 16, pointer;
    .popup_cart_inner {
      height: 100vh;
      overflow: auto;
      position: relative;
      height: 100%;
      max-width: 90%;
      text-align: left;
      cursor: default;
      float: right;
      width: 450px;
      background: ${THEME.colors.light};
      box-shadow: 0 0 10px rgb(0 0 0 / 5%);

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-track {
        background-color: #f2f2f2;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
      }
      .close_cart_btn {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 24px;
        line-height: 1;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        cursor: pointer;
      }
      .fly_cart_header {
        position: relative;
        padding: 26px 0 28px;
        background: ${THEME.colors.light};
        .fly_cart_title {
          font-size: 24px;
          font-weight: 500;
          margin: 26px 24px 28px;
        }
      }

      .fly_cart_body {
        padding: 0 20px;
        height: 400px;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        &::-webkit-scrollbar-track {
          background-color: #f2f2f2;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 4px;
        }
        .empty_cart_icon {
          width: 240px;
          max-width: 80%;
          margin: 0 auto 30px;
        }
        .empty_cart_heading {
          font-size: 18px;
          margin: 0 0 10px;
          font-weight: 500;
          text-align: center;
        }
        .empty_cart_text {
          text-align: center;
        }
        .return_to_shop {
          margin-top: 20px;
          text-align: center;
          a {
            padding: 10px 35px;
            border-radius: 5px;
            line-height: 43px;
            outline: none;
            border: none;
            color: ${THEME.colors.light};
            background-color: ${THEME.colors.primary};
            font-size: 16px;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            &:hover {
              box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
              color: ${THEME.colors.light};
              background-color: ${THEME.colors.primary};
            }
          }
        }
      }
    }
  }
  .opended {
    visibility: visible;
    opacity: 1;
  }
`;
