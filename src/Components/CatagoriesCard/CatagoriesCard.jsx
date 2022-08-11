import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import thumbnail1 from "./../../Images/Categories_card_img/h_cat_card_01.jpg"
import thumbnail2 from "./../../Images/Categories_card_img/h_cat_card_02.jpg"
import thumbnail3 from "./../../Images/Categories_card_img/h_cat_card_03.jpg"
import thumbnail4 from "./../../Images/Categories_card_img/h_cat_card_04.jpg"
import thumbnail5 from "./../../Images/Categories_card_img/h_cat_card_05.jpg"
import thumbnail6 from "./../../Images/Categories_card_img/h_cat_card_06.jpg"
import { StyledCatagoriesCard } from './StyledCatagoriesCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";





export const CatagoriesCard = () => {

  
  return (


    <Swiper 
    navigation={true} 
    modules={[Navigation]}
    breakpoints={{
      0:{
        slidesPerView : 2,
        spaceBetween: 10
      },
      480:{
        slidesPerView : 3,
        spaceBetween: 10
      },
      768:{
        slidesPerView : 3,
        spaceBetween: 10
      },
      991:{
        slidesPerView : 5,
        spaceBetween: 10
      }

      
    }}
    loop={true}
    
        
    
    className="mySwiper">
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail1} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Jackets<sup>5</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail2} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Glasses<sup>2</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail3} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Tops<sup>3</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail4} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Handbags<sup>3</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail5} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Sneakers<sup>11</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCatagoriesCard>
                <div className="card">
                <div className="card_thumbnail">
                    <img src={thumbnail6} alt="" />
                </div>
                <div className="card_title">
                        <Link to="/"><h3 className="title">Sandals<sup>2</sup></h3></Link>
                </div>
            </div>
            </StyledCatagoriesCard>
        </SwiperSlide>
        
      </Swiper>
            
            
          
        )
    
  }
   
    
    
    






