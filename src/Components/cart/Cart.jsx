import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import cartEmpty from "./../../../public/Images/empty-cart.png";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import CartFooter from "./cartFooter/CartFooter";

const Cart = ({ handleClickCart }) => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);

  return (
    <div className="popup_cart_inner">
      {/* Close btn */}
      <div className="close_cart_btn" onClick={handleClickCart}>
        <IoClose />
      </div>
      {/* Close btn */}

      <div className="fly_cart_header">
        <h3 className="fly_cart_title">Shopping Cart</h3>
      </div>
      <div className="fly_cart_body scroll_y ps">
        {cartItems.length === 0 ? (
          <div className="">
            <div className="empty_cart_icon">
              <img src={cartEmpty} alt="Cart empty" />
            </div>
            <h2 className="empty_cart_heading">
              Your cart is currently empty.
            </h2>
            <p className="empty_cart_text">
              You may check out all the available products and buy some in the
              shop.
            </p>
            <div className="return_to_shop">
              <Link
                to="shop"
                onClick={() => {
                  handleClickCart();
                }}
              >
                Return to shop
              </Link>
            </div>
          </div>
        ) : (
          <>
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </>
        )}
      </div>
      {cartItems.length === 0 ? "" : <CartFooter />}
    </div>
  );
};

export default Cart;
