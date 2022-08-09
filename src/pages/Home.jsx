import React from 'react'
import { Card } from '../Components/Card/Card'
import { CARD } from "../Components/Card/CardRoutes"
import mainimg1 from "../Images/Product_card_img/product_fashion_main_01.jpg";
import hoverimg1 from "../Images/Product_card_img/product_fashion_hover_01.jpg";
import elementor_img from "./../Images/h_cta.jpg"
import { Link } from 'react-router-dom';
import { StyledHome } from '../Styles/StyledHome';




export const Home = () => {
  return (
    <div className="container">
      <StyledHome>
        <div className="product_card_section">
          <div className="section_title">
            <h2 className="title">This week’s highlights</h2>
          </div>
          
              <div className="card_container">

              
              {
                  CARD.map((props , i) =>{
                    const { mainImg , hoverImg , subtitle , title , btntext, disPrice , price } = props
                    return(
                      <Card key={i} mainImg={mainimg1} hoverImg={hoverimg1} subtitle={subtitle} title={title} btntext={btntext} disPrice={disPrice} price={price}/>
                    )
                    
                  })
                }
                </div>
            <div className="product_card_cta">
              <button className="shop_now_btn btn">Shop Now</button>
            </div>

        </div>
         
         {/* Elementor section */}
          <div className="elementor_section">
            <div className="elementor_left_column">
              <img className="elementor_left_img" src={elementor_img} alt="" />
            </div>
            <div className="elementor_right_column">
              <h2 className="elementor_heading_title">Poplin Top With Ruffle Trim</h2>
              <p className="heading_description">We believe in crafting pieces where sustainability and style go hand in hand. Made from materials like recycled cashmere and sust</p>
              <Link to="/" className="elementor_section_btn">Shop Collection</Link>
            </div>
          </div>
         {/* Elementor section */}
         </StyledHome>
    </div>
  )
}
