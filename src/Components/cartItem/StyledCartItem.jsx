import styled from "styled-components";
import { THEME } from "../../Styles/Theme";

const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  .cart_img {
    width: 65px;
    .cart_thumbnil {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .cart_content {
    &_title {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      margin: 0;
    }
    &_price {
      font-size: 16px;
      line-height: 1;
      margin-bottom: 8px;
    }
  }
  .cart_btns {
    display: flex;
    align-items: center;
  }
  .quantity {
    overflow: hidden;
    height: 32px;
    max-width: 88px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 20px;
    .quantity_btn {
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
  .remove_btn {
    border: none;
    outline: none;
    background: transparent;
    text-decoration: underline;
    font-size: 14px;
    padding: 4px 5px;
    cursor: pointer;
  }
`;
export default StyledCartItem;
