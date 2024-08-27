import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonialSwiper.scss";
import { Pagination } from "swiper/modules";
import { ReactNode } from "react";
import React from "react";

interface TestimonialSwiperProps {
  children?: ReactNode;
}
export default function TestimonialSwiper({
  children,
}: TestimonialSwiperProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={10}
      centerInsufficientSlides={true}
      breakpoints={{
        640: {
          slidesPerView: "auto",
          slidesPerGroup: 1,
          allowTouchMove: true,
          spaceBetween: 10,
        },
        780: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          allowTouchMove: false,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          allowTouchMove: false,
          spaceBetween: 30,
        },
      }}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
