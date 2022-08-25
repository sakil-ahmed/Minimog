import styled from "styled-components";
import { media } from './Responsive';
import {BsArrowLeftShort} from "react-icons/bs"


export const StyledSelOpt = styled.div`
margin-top: 50px;
.swiper-button-prev{
    &::after{
        content: "" !important;
    }
}
.swiper-button-next{
    &::after{
        content: "" !important;
    }
}

${media.up("md")}{
    display: flex;
}
.right_column{
    ${media.up("lg")}{
        margin-left: 40px;
    }
}
.left_column,
.right_column{
    padding: 0 .9375rem;
    width: 100%;
    margin-right: 20px;
    ${media.up("md")}{
        max-width: 50%;
        width: 100%;
        padding: 0 .9375rem;
        margin-right: 0;
    }
    
}
    .slider{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    flex-wrap: nowrap;
    .slider_left{
        width: 100%;
        margin-bottom: 40px;
        ${media.up("lg")}{
            width: 81%;
            margin-bottom: 0;
        }
        
        .swiper-slide{
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
    }
    .slider_right{
        width: 90px;
        margin-right: 20px;
        overflow: hidden;
        ${media.down("md")}{
        display: none;
    }

        .swiper-slide{
            margin-bottom: 10px;
            height: auto !important;
            border: 1px solid transparent;
            transition: all .25s cubic-bezier(.645,.045,.355,1);
            img{
                transition: all .25s cubic-bezier(.645,.045,.355,1);
            }
            &:hover{
                border: 1px solid #000;
                img{
                    transform: scale3d(.86,.86,.86);
                }
            }
        }   
    }
}
`