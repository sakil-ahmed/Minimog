import styled from "styled-components";
import { THEME } from './../../../Styles/Theme';

export const StyledForgetPass = styled.div`
    background-color: ${THEME.colors.light};
    cursor: default;
    max-width: calc(100vw - 50px) ;
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    padding: 2rem;
    border-radius: 5px;
    .close_reset{
        position: absolute;
        top: -20px;
        right: -20px;
        cursor: pointer;
        font-size: 20px;
        width: 40px;
        height: 40px;
        box-shadow: 0 4px 10px rgb(0 0 0 / 17%);
        line-height: 40px;
        border-radius: 50%;
        background: ${THEME.colors.light};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${THEME.colors.primary};
        transition: all 0.3s ease-in-out;
        &:hover{
            background: ${THEME.colors.primary};
            color: ${THEME.colors.light};
        }
    }
    .reset_header{
        text-align: center;
        margin: 0 0 32px;
        .title{
            font-size: 36px;
            line-height: 1.44;
            text-align: center;
            font-weight: 400;
            
        }
        .description{
            font-size: 15px;
            line-height: 26px;
            margin: 10px 0 0;
            a{
                position: relative;
                transition: all .3s ease-in-out;
                &::after{
                    content: "";
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 0;
                    height: 1px;
                    background-color: ${THEME.colors.primary};
                    transition: 0.3s;
                }
                &:hover{
                    opacity: .5;
                }
                &:hover::after{
                    width: 100%;
                    left: 0;
                    opacity: .5;
                    
                    
                }
            }
        }
    }
    .lost-password-form{
        .form_group{
            margin: 0 0 15px;
            input{
                width: 100%;
                padding: 3px 18px;
                min-height: 45px;
                border-radius: 5px;
                border: 0;
                outline: 0;
                border: 1px solid #d2d2d2;
                font-size: 15px;
                font-weight: 400;
            }
            .submit{
                padding: 0 35px;
                height: 45px;
                line-height: 43px;
                outline: none;
                border: none;
                width: 100%;
                background: ${THEME.colors.primary};
                color: ${THEME.colors.light};
                cursor: pointer;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 500;
                transition: all .2s ease-in-out;
                &:hover{
                    box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
                } 
            }
        }
    }
`