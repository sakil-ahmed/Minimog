import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import StyledCartItem from "./StyledCartItem";
import { useDispatch } from "react-redux";
import {
  removeSingleItem,
  removeTocart,
  addToCart,
} from "../../redux/cart/cartSlice";

const CartItem = ({ item }) => {
  const { title, price, mainImg, quantity, id } = item;
  const dispatch = useDispatch();

  return (
    <StyledCartItem>
      <div className="cart_img">
        <img className="cart_thumbnil" src={mainImg} alt={title} />
      </div>
      <div className="cart_content">
        <h5 className="cart_content_title">{title}</h5>
        <p className="cart_content_price">{price}</p>
        <div className="cart_btns">
          <div className="quantity">
            <button
              type="button"
              onClick={() => dispatch(removeTocart(item))}
              className="quantity_btn"
            >
              <AiOutlineMinus />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="input-text qty text"
            />
            <button
              type="button"
              onClick={() => dispatch(addToCart(item))}
              className="quantity_btn"
            >
              <AiOutlinePlus />
            </button>
          </div>
          <button
            onClick={() => dispatch(removeSingleItem(item))}
            className="remove_btn"
          >
            Remove
          </button>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
