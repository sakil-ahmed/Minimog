import styled from "styled-components";
import { THEME } from './../../Styles/Theme';
import { media } from './../../Styles/Responsive';


export const StyledHeader = styled.header`
/* box-shadow: 4px 4px 8px rgba(0,0,0,.3); */
z-index: 999;
    .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
    }
    /* Header left */
    .left{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        .mobile_menu{
            display: inline-block;
            ${media.up("lg")}{
                display: none;
            }
        }

        .logo{
            width: 145px;
            img{
                width: 100%;
                cursor: pointer;
            }
        }
    }
    /* Header Middle */
    .middle{
        ${media.down("lg")}{
            position: fixed;
            top: 0;
            
            background-color: ${THEME.colors.mobileMenuBg};
            width: 100%;
            height: 100%;
            z-index: 999;

            &.open_mobile_menu{
                left: 0;
            }
            &.close_mobile_menu{
                left: -100%;
            }

            .mobile_menu_close{
                position: fixed;
                right: 13px;
                top: 0;
                height: 40px;
                width: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile_menu_inner{
                width: calc(100% - 55px);
                background-color: ${THEME.colors.light};
                padding: 20px 20px 0 20px;
                height: 100%;
            }
        }
        ul>li{
            list-style: none;
            padding: 13px 0;
            cursor: pointer;
            ${media.up("lg")}{
                padding: 24px 20px;
            }
        }
        ul{
            display: flex;
            flex-direction:column;
            ${media.up("lg")}{
                flex-direction: row;
            }
            
            a{
               
                text-decoration: none;
                line-height: 22px;
                font-weight: 500;
                font-style: normal;
                font-size: 16px;
                color: ${THEME.colors.primary};
                position: relative;
                &::after{
                    content: "";
                    position: absolute;
                    
                    right: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background-color: #000;
                    transition: 0.3s;
                }
                &:hover::after{
                    width: 100%;
                    left: 0;
                    
                }
                }
        }
    }
    .right{
        display: flex;
       
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
        .display_none{
            display: none;
            ${media.up("md")}{
                display: inline-block;
            }
        }
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
    }
        
`