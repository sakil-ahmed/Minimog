import React from 'react'
import { BsStar } from 'react-icons/bs';
import { StyledCardDetails } from './StyledCardDetails'
import { Link } from 'react-router-dom';

export const CardDetails = ({heading , price , disprice}) => {
  return (
    <StyledCardDetails>
        <div className="heading_top">
            <div className="top">
                <h1 className="heading">{heading}</h1>
                <div className="icon">
                    <BsStar/>
                    <span className="tooltiptext Wishlist">Add to Wishlist</span>
                </div>
            </div>
                <div className="bottom">
                    <div className="amount">
                        {disprice ? <span className="disprice">{disprice}</span> :""}
                        <span className="price">{price}</span>
                    </div>
                    <div className="review">
                        <span className="star">☆☆☆☆☆</span>
                        <Link to="/">(0 reviews)</Link>
                    </div>
                </div>
        </div>
        <div className="variations">
            <div className="colors"></div>
            <div className="size">
                
            </div>
        </div>
        
    </StyledCardDetails>
  )
}
