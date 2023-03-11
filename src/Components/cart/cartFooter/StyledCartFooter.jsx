import styled from "styled-components";
import { THEME } from "../../../Styles/Theme";

const StyledCartFooter = styled.div`
  margin-top: 20px;
  padding: 10px 24px 30px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px 0 hsl(0deg 0% 51% / 20%);

  /*---------------
  Cart Footer Links
  -------------- */
  .cart__footer__links {
    display: flex;

    .footer__link {
      flex-grow: 1;
      text-align: center;
      position: relative;
      padding: 10px;
      transition: all 0.3s ease-in-out;

      &:not(:nth-child(1)) {
        &::before {
          content: "";
          height: 26px;
          width: 1px;
          display: block;
          background: #dedede;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &:hover {
        opacity: 0.5;
      }

      svg {
        height: 20px;
        width: 20px;

        &:not(:nth-child(1)) {
          height: 22px;
          width: 22px;
        }

        margin: 0 auto;
      }
    }
  }

  /*-------------
  Price Section
  ------------ */

  .d__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .price__section {
    .sub__total {
      &__price {
        font-family: ${THEME.fonts.body};
        span {
          &:nth-child(2) {
            font-weight: 500;
            color: #000000;
          }
        }
      }
      &__shiping {
        font-family: ${THEME.fonts.body};
        span {
          &:nth-child(2) {
            font-weight: 500;
            color: #000000;
          }
        }
      }
    }
    .total {
      border-top: 1px solid #eee;
      padding-top: 8px !important;
      margin-top: 10px;

      &__price {
        font-family: ${THEME.fonts.body};
        font-size: 18px;
        font-weight: 500;
        color: #000000;
      }
    }
  }
  .checkout {
    margin-top: 10px;
    a {
      padding: 0 20px;
      display: block;
      text-align: center;
      border-radius: 5px;
      line-height: 43px;
      outline: none;
      border: none;
      color: #ffffff;
      background-color: #000000;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 0 0 0.2rem #000000;
        color: #ffffff;
        background-color: #000000;
      }
    }
  }
`;

export default StyledCartFooter;
