import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledCatagoriesCard } from './StyledCatagoriesCard';
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";





export const CatagoriesCard = () => {

  const data = [
    {
      img: "Images/Categories_card_img/h_cat_card_01.jpg",
      title: "Jackets",
      subtitle: "5",
    },
    {
      img: "Images/Categories_card_img/h_cat_card_02.jpg",
      title: "Glasses",
      subtitle: "2",
    },
    {
      img: "Images/Categories_card_img/h_cat_card_03.jpg",
      title: "Tops",
      subtitle: "3",
    },
    {
      img: "Images/Categories_card_img/h_cat_card_04.jpg",
      title: "Handbags",
      subtitle: "3",
    },
    {
      img: "Images/Categories_card_img/h_cat_card_05.jpg",
      title: "Sneakers",
      subtitle: "11",
    },
    {
      img: "Images/Categories_card_img/h_cat_card_06.jpg",
      title: "Sandals",
      subtitle: "2",
    },

  ]

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)


  return (


    <Swiper
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        991: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }}
      loop={true}
      className="mySwiper">

      {
        data.map((props, i) => {

          const { img, title, subtitle } = props
          return (
            <SwiperSlide key={i}>
              <StyledCatagoriesCard>
                <div className="card">
                  <div className="card_thumbnail">
                    <img src={img} alt="" />
                  </div>
                  <div className="card_title">
                    <Link to="/">
                      <h3 className="title">{title}<sup>{subtitle}</sup></h3>
                    </Link>
                  </div>
                </div>
              </StyledCatagoriesCard>
            </SwiperSlide>
          )
        })
      }
    </Swiper>

  )
}










