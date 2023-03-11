import styled from "styled-components";
import { THEME } from "./../../../Styles/Theme";

export const StyledCardDetails = styled.div`
  .heading_top {
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .heading {
        font-size: 30px;
        line-height: 1.54;
        font-weight: 400;
        text-transform: capitalize;
      }
      .icon {
        padding: 15px;
        background-color: ${THEME.colors.light};
        border-radius: 50%;
        margin-bottom: 7px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${THEME.colors.lighten};
        svg {
          font-size: 16px;
          transition: all 0.3s ease-in-out;
          color: ${THEME.colors.primary};
        }

        &:hover {
          background-color: ${THEME.colors.primary};
          box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
          border-color: ${THEME.colors.primary};
          svg {
            color: ${THEME.colors.light};
          }
          .tooltiptext {
            visibility: visible;
          }
          .Wishlist {
            left: -120px;
          }
        }
        .tooltiptext {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          visibility: hidden;
          font-size: 14px;
          background-color: ${THEME.colors.primary};
          color: ${THEME.colors.light};
          padding: 3px 8px;
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
        }
        .Wishlist {
          left: -100px;
        }
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      .amount {
        .disprice {
          font-size: 18px;
          font-weight: 400;
          color: ${THEME.colors.lighten};
          text-decoration: line-through;
          margin-right: 8px;
        }
        .price {
          font-size: 24px;
          color: ${THEME.colors.primary};
          font-weight: 400;
        }
      }
      .review {
        .star {
          font-size: 20px;
          line-height: 24px;
        }
        a {
          position: relative;
          transition: all 0.3s ease-in-out;
          margin-left: 10px;
          &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: ${THEME.colors.primary};
            transition: 0.3s;
          }
          &:hover {
            opacity: 0.5;
          }
          &:hover::after {
            width: 100%;
            left: 0;
            opacity: 0.5;
          }
        }
      }
    }
  }
  .variations {
    .text_color,
    .text_size {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      text-transform: capitalize;
      color: ${THEME.colors.primary};
      display: block;
    }
    .colors {
      max-width: 100%;
      padding: 10px 10px 10px 0;

      .color_1,
      .color_2 {
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 50%;
        margin-top: 7px;
        box-shadow: 0 0 0 1px rgb(0 0 0 / 10%);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
        background-color: ${THEME.colors.primary};
        &:hover {
          box-shadow: 0 0 0 1px ${THEME.colors.primary},
            0 8px 20px rgb(0 0 0 / 20%), inset 0 0 0 4px ${THEME.colors.light};
          transform: scale(1.1);
        }
      }
      .color_1 {
        margin-right: 10px;
      }
    }
    .size {
      .clear_size {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: fit-content;
        color: ${THEME.colors.primary};

        &:hover {
          color: ${THEME.colors.lighten};
        }
      }

      .size_btn {
        margin-top: 11px;
        .btn {
          background: ${THEME.colors.light};
          font-size: 18px;
          min-height: 45px;
          width: 45px;
          line-height: 45px;
          /* padding:10px 12px 10px 13px; */
          border-radius: 5px;
          overflow: hidden;
          border: 1px solid ${THEME.colors.borderColor};
          text-align: center;
          margin: 10px 10px 0 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
          display: inline-block;
          &:hover {
            border-color: ${THEME.colors.primary};
          }
        }
      }
    }
  }
  .entry_product_quantity_wrapper {
    padding-top: 18px;
    label {
      display: block;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      text-transform: capitalize;
      min-width: 81px;
      color: ${THEME.colors.primary};
      margin: 0 0 14px;
    }
    .quantity_button_wrapper {
      display: flex;

      .quantity {
        min-height: 45px;
        max-width: 130px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
        margin-right: 20px;
        button {
          min-height: 45px;
          width: 33%;
          border: none;
          outline: none;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f1f1f1;
          cursor: pointer;
        }
        input {
          width: 33%;
          min-height: 45px;
          text-align: center;
          border: none;
          outline: none;
          background-color: #f1f1f1;
          color: ${THEME.colors.primary};
        }
      }
    }
    .btn_top {
      flex-grow: 1;
    }
    .single_add_to_cart_button {
      height: 45px;
      line-height: 43px;
      outline: none;
      color: ${THEME.colors.primary};
      border: 1px solid ${THEME.colors.primary};
      background: transparent;
      padding: 0 10px;
      border-radius: 5px;
      font-size: 16px;
      transition: all 0.3s ease-in-out;
      width: 100%;
      &:hover {
        background-color: ${THEME.colors.primary};
        box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
        color: ${THEME.colors.light};
      }
    }
    .minimog-buy-now {
      width: 100%;
      margin: 20px 0 20px;
      padding: 0 10px;
      height: 45px;
      line-height: 43px;
      outline: none;
      background-color: ${THEME.colors.primary};
      color: ${THEME.colors.light};
      border-color: ${THEME.colors.primary};
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
      }
    }
  }
  .product-links {
    margin: 0 0 17px;
    padding: 0 0 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .compare-btn,
    .question-btn,
    .share-btn {
      margin: 0 32px 10px 0;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        svg {
          font-size: 16px;
          margin-right: 5px;
        }
        &:hover {
          color: #999;
        }
      }
    }
  }
  .entry-product-meta-shipping {
    margin: 23px 0 0;
    .item {
      display: flex;
      align-items: flex-start;
      /* align-items: center; */
      .icon {
        margin-right: 10px;
      }
      .label {
        font-weight: 500;
        color: ${THEME.colors.primary};
        margin: 0 10px 0 0;
      }
    }
    .product-meta-shipping-delivery-time {
      margin-bottom: 5px;
    }
  }
  .product-trust-badge {
    margin: 27px 0 0;
    padding: 15px 0 10px;
    background-color: #f7f7f7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .trust-badge-image {
    }
    .trust-badge-text {
      margin: 5px 0 0;
      color: ${THEME.colors.primary};
      font-size: 15px;
      line-height: 22px;
    }
  }
`;
