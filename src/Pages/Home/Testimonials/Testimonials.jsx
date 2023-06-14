
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { motion } from "framer-motion"

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "John Smith",
            description: "A mesmerizing landscape photograph showcasing the vibrant colors of a sunset over the ocean.",
        },
        {
            _id: 2,
            name: "Jane Doe",
            description: "An intimate portrait that beautifully captures the subject's emotions, conveying a powerful story.",
        },
        {
            _id: 3,
            name: "Jane Maxwell",
            description: "An intimate portrait that beautifully captures the subject's emotions, conveying a powerful story.",
        },
        // Add more objects for additional photographs
    ];
    return (
        <div className="testimonials">
            <h1 className="text-center">Testimonials</h1>
            <motion.li
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <Swiper
                        pagination={{

                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className='flex flex-col items-center m-24 text-orange-400'>
                                    <Rating
                                        placeholderRating={4.5}
                                        readonly
                                        emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className='my-3 text-black'>{review.description}</p>
                                    <h3 className='text-2xl'>
                                        {review.name}
                                    </h3>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </motion.li>

        </div>
    );
};

export default Testimonials;