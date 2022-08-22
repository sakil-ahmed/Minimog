import styled from "styled-components";


export const StyledSelOpt = styled.div`
margin-top: 50px;
display: flex;
.left_column,
.right_column{
    max-width: 50%;
    width: 100%;
    padding: 0 .9375rem;
}
    .slider{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    .slider_left{
        width: 81%;
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