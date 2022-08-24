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
import { CardDetails } from '../Components/Card/CardDetails/CardDetails';

export const SelectOption = () => {
  const { to } = useParams();
  const [data, setData] = useState("")
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const data = CARD.filter((data) => data.to === to);
    setData(data);
  });



  return (
    <div className="container">
      <StyledSelOpt>
        <div className="left_column">
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
              </div>
            </Swiper>
          </div>
        </div>
        </div>
        <div className="right_column">
          <CardDetails heading={data[0]?.title} price={data[0]?.price} disprice={data[0]?.disPrice}/>
        </div>
      </StyledSelOpt>
    </div>
  )
}
