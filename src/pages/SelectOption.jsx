import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CARD } from '../Components/Card/CardRoutes';
import { StyledSelOpt } from './../Styles/StyledSelOpt';
// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const SelectOption = () => {
  const { title } = useParams();
  const [data, setData] = useState("")
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const data = CARD.filter((data) => data.title === title);
    setData(data);

  }, []);



  return (
    <div className="container">
      <StyledSelOpt>
        <div className="slider">
          <div className="slider_left">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              loop={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={data[0]?.mainImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data[0]?.hoverImg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={data[0]?.images} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider_right">
            <Swiper
              direction={"vertical"}
              onSwiper={setThumbsSwiper}
              slidesPerView={2}
              modules={[Navigation, Thumbs]}
              navigation={false}
              className="mySwiper"
            >
              <div className="swiperslider">
                <SwiperSlide>
                  <img src={data[0]?.mainImg} alt="" />
                </SwiperSlide>
              </div>
              <div className="swiperslider">
                <SwiperSlide>
                  <img src={data[0]?.hoverImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={data[0]?.images} alt="" />
              </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </StyledSelOpt>
    </div>
  )
}
