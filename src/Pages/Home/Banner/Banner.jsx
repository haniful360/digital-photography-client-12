import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://i.ibb.co/cTVPtP2/Blue-Black-Creative-Digital-Photography-Service-Banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            
            <img src="https://i.ibb.co/7pBWxrF/Red-Modern-Business-Workshop-Photograpy-Medium-Banner-Landscap.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/Rhk7dt4/Black-Brown-Minimalist-Camera-Desktop-Prototype.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/F6Z12Nj/Grey-Minimalist-Flash-Sale-Facebook-AD.png" alt="" />
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}