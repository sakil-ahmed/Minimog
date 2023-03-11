import React from "react";
import { Link } from "react-router-dom";
import StyledCartFooter from "./StyledCartFooter";
import CuponIcon from "./../../../../public/Images/Icon/Cupon";
import PencilIcon from "../../../../public/Images/Icon/Pencil";
import ShipingIcon from "./../../../../public/Images/Icon/Shiping";
import { useSelector } from "react-redux";

const CartFooter = () => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);

  const subTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  const shipingPrice = subTotal >= 200 ? 0 : 10.0;

  const total = subTotal + shipingPrice;

  return (
    <StyledCartFooter>
      <div className="cart__footer__links">
        <Link className="footer__link" to="#">
          <PencilIcon />
          <span>Note</span>
        </Link>
        <Link className="footer__link" to="#">
          <ShipingIcon />
          <span>Shipping</span>
        </Link>
        <Link className="footer__link" to="#">
          <CuponIcon />
          <span>Coupon</span>
        </Link>
      </div>
      <div className="price__section">
        <div className="sub__total">
          <p className="sub__total__price d__flex">
            <span>Subtotal</span>
            <span>${subTotal}.00</span>
          </p>
          <p className="sub__total__shiping d__flex">
            <span>Shipping</span>
            <span>{shipingPrice === 0 ? "FREE" : `$${shipingPrice}.00`}</span>
          </p>
        </div>
        <div className="total">
          <p className="total__price d__flex">
            <span>Total</span>
            <span>${total}.00</span>
          </p>
        </div>
      </div>
      <div className="checkout">
        <Link className="checkout__btn" to={"/checkout"}>
          Checkout
        </Link>
      </div>
    </StyledCartFooter>
  );
};

export default CartFooter;
