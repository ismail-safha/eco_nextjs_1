import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper";

import Link from "next/link";

const Slider_main = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoHeight={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="slider"
      >
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src="img/banar_2.jpg" alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src="img/banar_3.jpg" alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <div className="image">
              <img src="img/banar_4.jpg" alt="" />
            </div>
            <div className="title-info">
              <span className="price">$39</span>
              <h3 className="title">Feel the tosca color</h3>
              <div className="button">
                <a href="#" className="primary-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-pagination">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Slider_main;
