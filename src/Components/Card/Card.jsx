import React from 'react'
import { StyledCard } from './Style'
import icon from "../../Images/Icon/star.svg"
import { Link } from 'react-router-dom'
export const Card = (props) => {

    const { mainImg , hoverImg , subtitle , title , btntext, disPrice , price } = props

  return (
    <StyledCard>
        <div className="card-top">
            <div className="thumbnail">
                {/* Card images */}
                <div className="card-main-img">
                    <img src={mainImg} alt="" />
                </div>

                <div className="card-hover-img">
                    <img src={hoverImg} alt="" />
                </div>

                {/* Card icon */}
                <div className="card-icon">
                    <div className="icon">
                        <img src={icon} alt="" />
                        <span className="tooltiptext Wishlist">Add to Wishlist</span>
                    </div>
                    
                    <div className="icon">
                        <img src={icon} alt="" />
                        <span className="tooltiptext Compare">Compare</span>
                    </div>
                    
                    <div className="icon">
                        <img src={icon} alt="" />
                        <span className="tooltiptext Quick">Quick view</span>
                    </div>
                    
                    
            </div>

            <div className="cta">
                <Link to="/">{btntext}</Link>
            </div>
            </div>
            
        </div>
        {/* Card text */}
        <div className="card-bottom">
            
            <h4 className="subtitle">
                <Link to="/">{subtitle}</Link>
            </h4>
            <h3 className="title">
                <Link to="/">{title}</Link>
            </h3>
            
            {disPrice ? 
            <del>
                <span className="dis-price">{disPrice}</span>
            </del>: ""
            }
            
            <span className="main-price">{price}</span>
            
        </div>
    </StyledCard>
  )
}
