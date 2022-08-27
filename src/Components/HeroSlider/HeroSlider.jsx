import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import { StyledHero } from "./StyledHero";

export const HeroSlider = () => {
  const heroSliderCard = [
    {
      title: "Exquisite Tailored Boxy Cut",
      img: "Images/Home_slider/h_slide_01.jpg",
    },
    {
      title: "Clean Vibe This Summer",
      img: "Images/Home_slider/h_slide_02.jpg",
    },
    {
      title: "Spring/Summer Essential Collection",
      img: "Images/Home_slider/h_slide_03.jpg",
    },
  ];

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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {heroSliderCard.map(({ title, img }, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledHero>
  );
};
