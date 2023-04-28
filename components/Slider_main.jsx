import React, { useState } from "react";
import styles from "../styles/SliderMain.module.css";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

const Slider_main = () => {
  const [dotsActive, setDotsActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-20px",
          transform: "translate(-50% -50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          color: "#000",
          background: "#e9e5d9",
          padding: "8px 0",
          cursor: "pointer",
          border: "1px slide #f3a847",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className={styles.main_slider}>
      <Slider {...settings}>
        <div>
          <img src="img/banar_2.jpg" alt="" />
          <div className={styles.content}>
            <h3>Inner world of brown</h3>
            <div className={styles.btn}>
              <Link href="#">Shop Now</Link>
            </div>
          </div>
        </div>

        <div>
          <img src="img/banar_4.jpg" alt="" />
          <div className={styles.content}>
            <h3>Inner world of brown</h3>
            <div className={styles.btn}>
              <Link href="#">Shop Now</Link>
            </div>
          </div>
        </div>
        <div>
          <img src="img/banar_5.jpg" alt="" />
          <div className={styles.content}>
            <h3>Inner world of brown</h3>
            <div className={styles.btn}>
              <Link href="#">Shop Now</Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slider_main;
