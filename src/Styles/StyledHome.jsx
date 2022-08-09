import styled, { ThemeConsumer } from "styled-components";
import { THEME } from './Theme';
import { media } from './Responsive';

export const StyledHome = styled.div`

/* product card section */
    .product_card_section{
        margin-top: 100px;

        ${media.up("lg")}{

        }
        .section_title{
            text-align: center;
            width: 100%;
            .title{
                font-size: 24px;
                line-height: 1.44;
                font-weight: 400;
                margin-bottom: 30px;
                ${media.up("lg")}{
                    font-size: 36px;
                    margin-bottom: 41px;
                }
            }
        }
        .card_container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            ${media.up("md")}{
                grid-template-columns: 1fr 1fr 1fr;
                }
            ${media.up("lg")}{
                grid-template-columns: 1fr 1fr 1fr 1fr;
                }
        }
        .product_card_cta{
            width: 100%;
            text-align: center;
            margin-top: 5px;
            ${media.up("lg")}{
                margin-top: 57px;
            }
            .shop_now_btn{
                padding: 0 33px;
                min-height: 45px;
                border: 1px solid ${THEME.colors.primary};
                border-radius: 5px;
                background: transparent;
                font-weight: 500;
                color: ${THEME.colors.primary};
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease-in-out;
                width: 100%;
                ${media.up("md")}{
                    width: fit-content;
                }
               
                &:hover{
                    background-color: ${THEME.colors.primary};
                    color: ${THEME.colors.light};
                    box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
                }
            }
        }
    }


/* product card section */


    /* Elementor section */
    .elementor_section{
        margin-top: 40px;
        ${media.up("lg")}{
            margin-top: 100px;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        ${media.up("md")}{
            flex-wrap: nowrap;
        }
        
        .elementor_left_column{
            margin-bottom: 20px;
            overflow: hidden;
            ${media.up("md")}{
                max-width: 60%;
            }
            ${media.up("lg")}{
                margin: 0 15px;
            }
            img{
                width: 100%;
                transition: all .75s cubic-bezier(0,0,.2,1);
                object-fit: cover;
            }
            &:hover{
                img{
                    transform: scale(1.1);
                }
            }
            
        }
        .elementor_right_column{
            
            ${media.up("md")}{
                padding: 0 15px 0 55px;
                max-width: 40%;
            }
            ${media.up("lg")}{
                max-width: 40%;
                padding: 0 15px 0 55px;
            }
            .elementor_heading_title{
                
                text-transform: capitalize;
                font-size: 24px;
                line-height: 1.43;
                font-weight: 400;
                margin-bottom: 18px;
                ${media.up("lg")}{
                    font-size: 42px;
                    max-width: 360px;
                }
            }
            .heading_description{
                font-size: 16px;
                line-height: 1.75;
                margin: 15px 0 30px 0;
                padding-right: 10px;
                ${media.up("lg")}{
                    margin: 18px 0 38px 0;
                }


            }
            .elementor_section_btn{
                position: relative;
                padding-bottom: 4px;
                &::after{
                    content: "";
                    position: absolute;
                    
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    transition: 0.3s;
                }
                &:hover::after{
                    width: 0;
                    right: 0;
                    
                }
               
              
            }
   
        }
    }
`