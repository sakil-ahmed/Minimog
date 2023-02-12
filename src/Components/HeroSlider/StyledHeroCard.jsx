import styled from "styled-components";
import { THEME } from "../../Styles/Theme";
import { media } from "./../../Styles/Responsive";

export const StyledHeroCard = styled.div`
  width: 100%;
  height: 100%;
  .container {
    height: 100%;
  }
  .hero_content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .sub_title {
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.54;
    margin: 0 0 10px;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.3em;
    color: #000;
    max-width: 550px;
    margin-bottom: 40px;
    ${media.up("md")} {
      font-size: 60px;
    }
  }
  .shop_now_btn {
    padding: 10px 33px;
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
    ${media.up("md")} {
      width: fit-content;
    }
    &:hover {
      background-color: ${THEME.colors.primary};
      color: ${THEME.colors.light};
      box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
    }
  }
`;
