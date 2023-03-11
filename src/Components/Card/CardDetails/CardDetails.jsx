import React, { useState, useRef } from "react";
import { BsStar } from "react-icons/bs";
import { StyledCardDetails } from "./StyledCardDetails";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsQuestionCircle } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import img from "./../../../../public/Images/product-trust-badge.png";
import { addToCart } from "../../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/wishList/wishList";

export const CardDetails = ({ item }) => {
  const { disprice, price, title, mainImg, id, size } = item;
  const dispatch = useDispatch();

  // Products Size
  const [selectedSize, setSelectedSize] = useState();

  const handleSelectedSize = (size) => setSelectedSize(size);

  // clear size
  const handleClear = () => {
    setSelectedSize();
  };
  // Products count
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity - 1);

  return (
    <StyledCardDetails>
      <div className="heading_top">
        <div className="top">
          <h1 className="heading">{title}</h1>
          <div className="icon" onClick={() => dispatch(addToWishlist(item))}>
            <BsStar />
            <span className="tooltiptext Wishlist">Add to Wishlist</span>
          </div>
        </div>
        <div className="bottom">
          <div className="amount">
            {disprice ? <span className="disprice"></span> : ""}
            <span className="price">${price}.00</span>
          </div>
          <div className="review">
            <span className="star">☆☆☆☆☆</span>
            <Link to="/">(0 reviews)</Link>
          </div>
        </div>
      </div>
      <div className="variations">
        <div className="colors">
          <span className="text_color">Color :</span>
          <div className="color_1"></div>
          <div className="color_2"></div>
        </div>

        <div className="size">
          <span className="text_size">Size :{selectedSize}</span>
          <div className="size_btn">
            {size.map((item, i) => {
              return (
                <div
                  className="btn"
                  key={i}
                  onClick={() => handleSelectedSize(item)}
                >
                  <span title="XS">{item}</span>
                </div>
              );
            })}
          </div>
          {selectedSize ? (
            <span className="clear_size" onClick={handleClear}>
              <AiOutlineClose />
              clear
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="entry_product_quantity_wrapper">
        <label htmlFor="">Quantity</label>
        <div className="quantity_button_wrapper">
          <div className="quantity">
            <button
              type="button"
              className=""
              onClick={decrease}
              disabled={quantity === 1 ? true : false}
            >
              <AiOutlineMinus />
            </button>
            <input
              type="text"
              readOnly
              value={quantity}
              className="input-text qty text"
            />
            <button type="button" className="" onClick={increase}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="btn_top">
            <button
              onClick={() =>
                dispatch(addToCart({ price, title, mainImg, id, quantity }))
              }
              type="submit"
              className="single_add_to_cart_button"
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>

        <button type="submit" className="minimog-buy-now">
          <span>Buy Now</span>
        </button>
      </div>
      <div className="product-links">
        <div className="compare-btn">
          <Link to="/">
            <CgArrowsExchangeAlt size="20px" />
            <span>Compare</span>
          </Link>
        </div>
        <div className="question-btn">
          <Link to="/">
            <BsQuestionCircle />
            <span>Ask a Question</span>
          </Link>
        </div>
        <div className="share-btn">
          <Link to="/">
            <BiShareAlt />
            <span>Share</span>
          </Link>
        </div>
      </div>
      <div className="entry-product-meta-shipping">
        <div className="item product-meta-shipping-delivery-time">
          <div className="icon">
            <TbTruckDelivery size="22px" />
          </div>
          <div className="label">
            <span>Estimated Delivery:</span>
          </div>
          <div className="value">
            <span>23 - 30 Aug, 2022</span>
          </div>
        </div>
        <div className="item product-meta-shipping-return">
          <div className="icon">
            <BsBoxSeam size="20px" />
          </div>
          <div className="label">
            <span>Free Shipping & Returns:</span>
          </div>
          <div className="value">
            <span>On all orders over $200.00</span>
          </div>
        </div>
      </div>
      <div className="product-trust-badge">
        <div className="trust-badge-image">
          <img src={img} alt="" />
        </div>
        <div className="trust-badge-text">
          <span>Guaranteed safe & secure checkout</span>
        </div>
      </div>
    </StyledCardDetails>
  );
};
