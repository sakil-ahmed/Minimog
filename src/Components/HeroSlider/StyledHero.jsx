import styled from "styled-components";
import { THEME } from './../../Styles/Theme';

export const StyledHero = styled.div`
    .swiper-button-prev,
    .swiper-button-next{
        display: none;
    }
    .swiper-wrapper{
        position: relative;
    }
        .swiper-pagination{
            position: absolute;
            top: 50%;
            left: 95%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            width: 30px;
            height: fit-content ;
            align-items: center;
            gap: 30px;
            .swiper-pagination-bullet{
            background-color: ${THEME.colors.primary};
            width: 10px;
            height: 10px;
            opacity: 1;
            display:flex;
            transition: all .3s cubic-bezier(0,0,.2,1);
        }
        .swiper-pagination-bullet-active{
            width: 15px;
            height: 15px;
            background: transparent;
            border: 1px solid ${THEME.colors.primary};
        }
    }
    
`