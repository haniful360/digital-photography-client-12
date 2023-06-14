import React from 'react';
import { motion } from "framer-motion"
const PopularClassDetails = ({ popularClass }) => {
    console.log(popularClass);
    const { name, email, image, instructorName, price, seat } = popularClass
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <motion.li
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >

                    <img src={image} alt="Shoes" className=" h-[280px] rounded-xl" />
                </motion.li>

            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Class: {name}</h2>
                <p>Instructor name:{instructorName}</p>
                <p>Email:{email}</p>
                <p>Price:${price}</p>
                <p>Seats:{seat}</p>
            </div>
        </div>
    );
};

export default PopularClassDetails;