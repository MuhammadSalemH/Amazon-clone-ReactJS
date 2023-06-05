import React, { useState } from "react";
import Slider from "react-slick";

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
} from "../assets";

const CarouselSlider = () => {
  const [activeDot, setActiveDot] = useState(0);

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    beforeChange: (pre, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          borderRadius: "10px",
          left: "50%",
          top: "65%",
          transform: "translateX(-50%)",
          width: "100px",
        }}
      >
        <ul className="w-full flex justify-between items-center"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3  rounded-[50%] border border-amazon_blue cursor-pointer ${
          i === activeDot ? "bg-amazon_blue border-0" : ""
        }`}
      />
    ),
  };

  return (
    // <div className="w-full">
    <div className={`relative w-full h-full slider-container`}>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="slider-1" />
        </div>
        <div>
          <img src={slider6} alt="slider-6" />
        </div>
        <div>
          <img src={slider2} alt="slider-2" />
        </div>
        <div>
          <img src={slider3} alt="slider-3" />
        </div>
        <div>
          <img src={slider4} alt="slider-4" />
        </div>
        <div>
          <img src={slider5} alt="slider-5" />
        </div>
      </Slider>
    </div>
    // </div>
  );
};

export default CarouselSlider;
