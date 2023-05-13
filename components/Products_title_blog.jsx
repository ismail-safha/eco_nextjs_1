import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Link from "next/link";
import React from "react";
import styles from "../styles/Products_title_blog.module.css";

const Products_title_blog = () => {
  return (
    <div className={styles.product_title}>
      <h2>Popular Instagram Photo</h2>
      <div className="all_cards_blogs">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            // when window width is >= 640px
            481: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              centeredSlides: false,
            },
            // when window width is >= 768px
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              centeredSlides: false,
            },
            992: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              centeredSlides: false,
            },
          }}
          modules={[Navigation]}
          className="carouselbox"
        >
          <div className="wrapper swiper-wrapper">
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.product_img}>
                <div className={styles.thumbnail}>
                  <img src="img/product/product_1.jpeg" alt="" />
                </div>
                <div className={styles.actions}>
                  <ul>
                    <li>
                      <Link href="">
                        <i className="ri-instagram-line"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Products_title_blog;

/*
 <div className={styles.product_card}>
          <div className={styles.product_img}>
            <div className={styles.thumbnail}>
              <img src="img/product/product_1.jpeg" alt="" />
            </div>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Link href="">
                    <i className="ri-star-line"></i>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <i className="ri-eye-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <h3>1</h3>
        </div>
*/
