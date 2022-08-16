import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import { StyledHero } from './StyledHero'
import heroSliderImg1 from "./../../../public/Images/Home_slider/h_slide_01.jpg"
import heroSliderImg2 from "./../../../public/Images/Home_slider/h_slide_02.jpg"
import heroSliderImg3 from "./../../../public/Images/Home_slider/h_slide_03.jpg"

export const HeroSlider = () => {
  return (

    <StyledHero>
    <Swiper
      effect={"fade"}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade ]}
      className="mySwiper"
    >
      <SwiperSlide><img src={heroSliderImg1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={heroSliderImg2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={heroSliderImg3} alt="" /></SwiperSlide>
    </Swiper>  
    </StyledHero>
  )
}
