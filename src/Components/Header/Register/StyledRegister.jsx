import styled from "styled-components";
import { THEME } from './../../../Styles/Theme';

export const StyledRegisterForm = styled.div`
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
    .close_register{
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
    .register_header{
        text-align: center;
        margin: 0 0 32px;
        .register_title{
            font-size: 36px;
            line-height: 1.44;
            font-weight: 400;
        }
        .register_description{
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
    .register_body{
        .form_group{
            margin-bottom: 15px;
            position: relative;
            .show_hide_btn{
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
                cursor: pointer;
                svg{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .form-input{
                width: 100%;
                padding: 3px 18px;
                min-height: 45px;
                border-radius: 5px;
                border: 0;
                outline: 0;
                border: 1px solid ${THEME.colors.formBorder};
                font-size: 15px;
                font-weight: 400;
                &:focus{
                    border: 1px solid ${THEME.colors.primary};
                }
            }
            .form-checkbox{
                margin-right: 5px;
                width: 16px;
                height: 16px;
            
            }  
        }
        .submit_btn{
                padding: 0 35px;
                height: 45px;
                line-height: 43px;
                outline: none;
                border: none;
                width: 100%;
                margin: 19px 0 18px;
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
`