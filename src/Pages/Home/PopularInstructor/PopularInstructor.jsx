import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import './PopularInstructor.css'
// import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setPopularInstructor(data))
    }, [])
    return (
        <div>
            <h1>popular classes:{popularInstructor.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* {
                    popularInstructor.map(popularIns => <PopularInsDetails key={popularIns._id}
                        popularIns={popularIns}
                    ></PopularInsDetails>)
                } */}
                {
                    <div className="container">
                        <h1 className="heading">Flower Gallery</h1>
                        <Swiper
                    pagination={{

                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        popularInstructor.map(popularIns => {
                            popularInstructor.map(popularIns => <SwiperSlide key={popularIns._id}>
                                <img src={popularIns.photoURL} alt="slide_image" />
                                <h1>{popularIns.displayName}</h1>
                        
                            </SwiperSlide>)
                        })
                    }

                </Swiper>
                    </div>
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
