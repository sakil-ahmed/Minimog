import styled from "styled-components";
import { THEME } from './../../Styles/Theme';
import { media } from './../../Styles/Responsive';


export const StyledHeader = styled.header`
/* box-shadow: 4px 4px 8px rgba(0,0,0,.3); */
box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
z-index: 999;

    .wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
        min-height: 50px;
        ${media.up("md")}{
            min-height: 70px;
            }

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
    }
    /* Header Middle */
    .middle{
        transition: all 0.2s ease-in-out;
        ${media.up("lg")}{
            .mobile_menu_close{
                display: none;
            }
        }
        ${media.down("lg")}{
            position: fixed;
            top: 0;
            left: 0;
            background-color: ${THEME.colors.mobileMenuBg};
            width: 100%;
            height: 100%;
            z-index: 999;
            display: flex;

            &.open_mobile_menu{
                left: 0;
            }
            &.close_mobile_menu{
                left: -100%;
            }

            .mobile_menu_close{
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
               
            }
            
            .mobile_menu_inner{
                width: 340px;
                background-color: ${THEME.colors.light};
                padding: 20px 20px 20px 20px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                
            }
        }
        .account{
        ${media.up("lg")}{
           display:none; 
        }
        .account_icon{
            display: flex;
            align-items: center;
        }
        .account_btn_grp{
            margin-top: 12px;
            .btn{
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
            .login{
                color: ${THEME.colors.light};
                background-color: ${THEME.colors.primary};
                margin-bottom: 12px;
            }
            .register{
                border: 1px solid ${THEME.colors.primary};
                background-color: transparent;
                color: ${THEME.colors.primary};
            }
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