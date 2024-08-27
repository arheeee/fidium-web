import React, { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AwardSwiperProps {
  children: ReactNode;
}
export default function AwardSwiper({ children }: AwardSwiperProps) {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    dots: false,
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 8,
    speed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}
