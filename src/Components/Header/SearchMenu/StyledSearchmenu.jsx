import styled from "styled-components";
import { THEME } from './../../../Styles/Theme';
import { media } from './../../../Styles/Responsive';
import { Outlet } from 'react-router-dom';

export const StyledSearchMenu = styled.div`
    position: relative;
    background: ${THEME.colors.light};
    width: 100%;
    cursor: default;
    padding: 2rem 0; 
    ${media.down("md")}{
        height: 100vh;
    }
    .search_mobile_heading{
        font-size: 16px;
        margin-bottom: 7px;
        font-weight: 500;
        ${media.up("md")}{
            display: none;
        }
    }
    .search_close_icon{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
    }

    .search_menu_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* Logo */
        .search_menu_logo{
            ${media.down("md")}{
                display: none;
            }
            width: 100px;
            ${media.up("sm")}{
                width: 120px; 
            }
            ${media.up("lg")}{
                width: 145px; 
            }
            img{
                width: 100%;
                cursor: pointer;
            }
        }
        /* Logo */
        /* Search bar */
        .search_bar{
            width: 600px;
            padding: 0 20px;
            ${media.down("md")}{
                width: 100% ;
                padding: 0;
            }
            form{
                position: relative;
            }
            input{
                width: 100%;
                position: relative;
                border-color: transparent;
                background-color: transparent;
                box-shadow: none;
                appearance: none;
                padding-right: 45px;
                padding: 3px 18px;
                border-radius: 5px;
                min-height: 45px;
                border: 1px solid ${THEME.colors.formBorder};
                &:focus{
                   outline: 0;
                   border: 1px solid ${THEME.colors.primary};
                }
            }
            .search_btn{
                position: absolute;
                top: 0;
                right: 0;
                min-width: 45px;
                height: 45px;
                line-height: 45px;
                padding: 0;
                border: 0;
                border-radius: 5px;
                font-size: 22px;
                background: transparent;
                svg{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
        /* Search bar */
    }
    /* Icons */
    .search_bar_icons{
        display: flex;
        ${media.down("md")}{
                display: none;
            }
    

    .header-icon{
            padding: 0 14px;
            position: relative;
            img{
                transition: 0.3s;
                min-width: 22px;
                &:hover{
                    opacity: 0.5;
                }
                }
            
            .icon-badge{
                
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
    }
     /* Icons */
    /* Tooltip */
        .tooltip{
            position: relative;
            &:hover{
                .tooltiptext{
                    top: 130%;
                    visibility: visible;
                }
            }
            .tooltiptext{
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
        /* Tooltip */
        .search_menu_keyWord{
            text-align: start;
            margin: 9px 0 0;
            ${media.up("md")}{
                text-align: center;
            }
            a{
                text-decoration: underline;
                margin: 0 12px 0 0;
                transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
                &:hover{
                    opacity: .6;
                }
            }
        }
`