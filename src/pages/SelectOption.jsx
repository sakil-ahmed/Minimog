import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledSelOpt } from "./../Styles/StyledSelOpt";
// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { CardDetails } from "../Components/Card/CardDetails/CardDetails";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export const SelectOption = () => {
  /* This is a react hook. It is a function that lets you hook into react features. */
  const { to } = useParams();
  const [data, setData] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const CardData = useSelector((state) => state.product.allProducts);

  useEffect(() => {
    const getData = CardData.filter((data) => data.to === to);
    setData(getData[0]);
  }, []);
  return (
    <div className="container">
      <Helmet>
        <title>{data?.title}</title>
      </Helmet>
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
                  <img src={data?.mainImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={data?.hoverImg} alt="" />
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
                <SwiperSlide>
                  <img src={data?.mainImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={data?.hoverImg} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="right_column">
          <CardDetails item={data} />
        </div>
      </StyledSelOpt>
    </div>
  );
};
