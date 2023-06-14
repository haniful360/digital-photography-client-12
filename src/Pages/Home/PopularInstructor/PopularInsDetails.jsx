// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './PopularInstructor.css'
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// const PopularInsDetails = ({popularIns}) => {
//     console.log('popularInstructor',popularIns);
//     const { photo, displayName} = popularIns;
//     return (
//         <div className="container">
//         <h1 className="heading">Flower Gallery</h1>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: '.swiper-pagination', clickable: true }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//             clickable: true,
//           }}
//           modules={[EffectCoverflow, Pagination, Navigation]}
//           className="swiper_container"
//         >
//           <SwiperSlide>
//             <img src={photo} alt="slide_image" />
//             {/* <h1>{displayName}</h1> */}
//           </SwiperSlide>
//           {/* <SwiperSlide>
//             <img src={slide_image_2} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={slide_image_3} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={slide_image_4} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={slide_image_5} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={slide_image_6} alt="slide_image" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={slide_image_7} alt="slide_image" />
//           </SwiperSlide> */}
  
//           <div className="slider-controler">
//             <div className="swiper-button-prev slider-arrow">
//               <ion-icon name="arrow-back-outline"></ion-icon>
//             </div>
//             <div className="swiper-button-next slider-arrow">
//               <ion-icon name="arrow-forward-outline"></ion-icon>
//             </div>
//             <div className="swiper-pagination"></div>
//           </div>
//         </Swiper>
//       </div>
//     );
// };

// export default PopularInsDetails;