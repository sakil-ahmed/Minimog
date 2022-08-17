import styled from "styled-components";
import { THEME } from './../../Styles/Theme';
import { media } from './../../Styles/Responsive';


export const StyledFooter = styled.div`

    .row{
       .footer_top{
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 80px 0 47px;
        width: 100%;
        ${media.down("sm")}{
            flex-direction: column;
        }
        
        
            .text{
                font-size: 16px;
                line-height: 30px;
                color: ${THEME.colors.secondary};
            }
            .footer_top_content{
                padding: 0 15px;
                margin-bottom: 30px;
                min-width: 18%;
                ${media.down("sm")}{
                    margin-bottom: 0;
                    }
                ${media.down("sm")}{
                    max-width: 100%;
                }
                .heading_text{
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 1.43;
                    padding: 0 1em 20px 0;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    
                    svg{
                        ${media.up("sm")}{
                            display: none;
                        }
                    }
                    
                }
                .company_item{
                    width: 100%;
                    transition: all .3s cubic-bezier(0,0,.2,1);
                    
                }
                .hide_item{
                    ${media.down("sm")}{
                        display: none;

                    }
                }
            }
            .space{
                width: 8%;
                ${media.down("xl")}{
                    display: none;
                }
            }
            .right_text{
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: .5px;
                    color: ${THEME.colors.gray};
                    margin-bottom: 11px;
                    line-height: 1;
            }
            .right_heading_text{
                    font-size: 18px;
                    line-height: 1.44em;
                    font-weight: 400;
                    margin-bottom: 11px;
                }

            .gift_card_container{
                ${media.down("sm")}{
                    margin-top: 20px;
                }
            }
            
            .gift_card{
                margin: -10px 0 43px;
        }
        .social_media{
                .social_media_icon{
                    display: flex;
                    a{
                        margin: 0 15px;
                        font-size: 20px;
                        transition: all 0.3s ease;
                        &:first-child{
                            margin-left: 0;
                        }
                        &:hover{
                            opacity: 0.5;
                        }
                    }
                }
            }
       }

       .footer_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 26px 0;
        ${media.down("sm")}{
            flex-direction:column;
            align-items: flex-start;
            flex-direction: column-reverse;
            
        }
        .copy_text{
            ${media.down("sm")}{
                margin-top: 20px;
            }
        }
       }
    }
`