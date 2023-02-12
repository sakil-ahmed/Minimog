import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import { StyledHero } from "./StyledHero";
import { HeroCard } from "./HeroCard";

export const HeroSlider = () => {
  const heroSliderCard = [
    {
      title: "Exquisite Tailored Boxy Cut",
      img: "https://minimog.thememove.com/wp-content/uploads/2021/12/h8_slide_03.jpg",
    },
    {
      title: "Clean Vibe This Summer",
      img: "https://minimog.thememove.com/wp-content/uploads/2021/12/h8_slide_02.jpg",
    },
    {
      title: "Spring/Summer Essential Collection",
      img: "https://minimog.thememove.com/wp-content/uploads/2021/12/h8_slide_01.jpg",
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
        {heroSliderCard.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className="bg_img"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                }}
              >
                <HeroCard item={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledHero>
  );
};
