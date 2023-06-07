import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel className='text-center'>
                <div>
                    <img  src="https://i0.wp.com/softappworld.com/wp-content/uploads/2022/08/Top-9-Best-Software-For-Photographers-In-2022.jpg" />
                </div>
                <div>
                    <img src="https://i0.wp.com/softappworld.com/wp-content/uploads/2022/08/Top-9-Best-Software-For-Photographers-In-2022.jpg" />

                </div>
                <div>
                    <img src="https://i0.wp.com/softappworld.com/wp-content/uploads/2022/08/Top-9-Best-Software-For-Photographers-In-2022.jpg" />

                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;