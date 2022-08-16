import styled from "styled-components";
import { THEME } from './../../Styles/Theme';
import { media } from './../../Styles/Responsive';

export const StyledTimer = styled.div`



text-align: center;
    .coundown_title{
        font-size: 24px;
        line-height: 1.43;
        font-weight: 400;
        margin-bottom: 20px;
        white-space: nowrap;
        ${media.up("md")}{
            font-size: 32px;
            margin-bottom: 38px;
        }
        ${media.up("lg")}{
            font-size: 42px;
        }
    }
    .coundown_timer{
        display: flex;
        max-width: 468px;
        justify-content: space-around;
        margin: 0 auto;
        align-items: center;
    
        .coundown_devider{
            width: 20px;
            text-align: center;
            font-size: 30px;
            margin-bottom: 28px;
            
        }
        .count{
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                font-size: 35px;
                color: ${THEME.colors.primary};
                font-weight: 300;
                ${media.up("md")}{
                    font-size: 55px;
                }
            }
            .coundown_text{
                color: ${THEME.colors.primary};
            }
        }
    }
    .coundown_cta{
        margin-top: 20px;
        ${media.up("md")}{
            margin-top: 40px;
        }
        .btn{
            padding: 0 32px;
            color: ${THEME.colors.light};
            background-color: ${THEME.colors.primary};
            min-height: 45px;
            border-radius: 5px;
            border: none;
            outline: none;
            cursor: pointer;
            text-align: center;
            line-height: 23px;
            font-size:16px;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            ${media.down("sm")}{
                width: 100%;
            }
            &:hover{
                box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
            }
        }
    }
                
    
`