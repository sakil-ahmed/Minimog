import styled from "styled-components";
import { THEME } from './../../Styles/Theme';
import { media } from './../../Styles/Responsive';



export const StyledCard = styled.div`
    .card-top{
        
        height: auto;
        overflow: hidden;
        .thumbnail{
            position: relative;
            overflow: hidden;
            &:hover{
                .card-icon{
                    right: 20px; 
                }
                .cta{
                    bottom: 20px;
                    left: 20px;
                    right: 20px; 
                }
                .card-hover-img{
                    opacity: 1;
                    object-fit: cover;
                    transform: scale(1.1);
                }  
            }
            .card-main-img{
                transition: opacity .8s ease;
                
            }
            .card-hover-img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: 0.8s;
                }
            
        }
        .card-icon{
                position: absolute;
                top: 20px;
                right: -55px;
                transition: 0.3s;
                .icon{
                    padding: 15px;
                    background-color: ${THEME.colors.light};
                    border-radius: 50%;
                    margin-bottom: 7px;
                    cursor: pointer;
                    transition: all .3s ease;
                    position: relative;
                    &:hover{
                        background-color: ${THEME.colors.primary};
                        .tooltiptext{
                            visibility: visible;
                        }
                        .Wishlist{
                        left: -120px; 
                        }
                    .Compare{
                        left: -80px; 
                    }
                    .Quick{
                        left: -90px; 
                    }
                    }
                    .tooltiptext{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        visibility: hidden;
                        font-size: 14px;
                        background-color: ${THEME.colors.primary};
                        color: ${THEME.colors.light};
                        padding: 3px 8px;
                        border-radius: 6px;
                        transition: all .3s ease;
                    }
                    .Wishlist{
                        left: -100px; 
                    }
                    .Compare{
                        left: -70px; 
                    }
                    .Quick{
                        left: -80px; 
                    }
                }
                
                
            }
            .cta{
                position: absolute;
                bottom: -45px;
                left: 20px;
                right: 20px;
                transition: 0.3s;
                width: 85%;
                a{
                    width: 100%;
                    padding: 0 10px;
                    text-decoration: none;
                    background-color: ${THEME.colors.light};
                    color: ${THEME.colors.primary};
                    display: block;
                    text-align: center;
                    line-height: 43px;
                    border-radius: 6px;
                    transition: 0.3s;
                    &:hover{
                        color: ${THEME.colors.light};
                        background-color: ${THEME.colors.primary};
                    }
                }
            }
            
    
    }
    .card-bottom{
       padding: 20px 0;
            
                .subtitle{
                    font-size: 12px;
                    line-height: 24px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 3px;
                    a{
                        text-decoration: none;
                        color: ${THEME.colors.text};
                        transition: 0.3s;
                        &:hover{
                            color: ${THEME.colors.primary};
                        }  
                    }
                }

                .title{
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1.5;
                    margin-bottom: 0;
                    ${media.up("lg")}{
                        font-size: 16px;
                        font-weight: 600;  
                    }
                    a{
                        text-decoration: none;
                        color: ${THEME.colors.primary};
                        transition: 0.3s;
                        &:hover{
                            color: ${THEME.colors.text};
                        }
                    }

                }
                .dis-price{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    margin-right: 8px;
                    margin-top: 8px;
                    color: ${THEME.colors.lighten};
                }
                .main-price{
                    font-size: 16px;
                    line-height: 20px;
                    margin-top: 8px;
                    font-weight: 400;
                    color: ${THEME.colors.primary};
                }
        
            }

`