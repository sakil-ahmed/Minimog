import React from 'react'
import styled from 'styled-components'
import { THEME } from './../../Styles/Theme';


const StyledHeaderTop = styled.div`
width: 100%;
text-align: center;
padding: 10px 0;
    &.home-text{
        background-color: ${THEME.colors.headertopbg};
        min-height: 40px;
        span{
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: .05em;
            color: ${THEME.colors.headertoptext};
            
        }
    }
    &.text{
        background-color: ${THEME.colors.iconbg};
        span{
            color: ${THEME.colors.light};
            
            display: block;
            font-size: 15px;
        }
    }

`

export const HeaderTop = ({ text, type }) => {
    return (
        <StyledHeaderTop className={type}>
            <span>{text}</span>
        </StyledHeaderTop>
    )
}
