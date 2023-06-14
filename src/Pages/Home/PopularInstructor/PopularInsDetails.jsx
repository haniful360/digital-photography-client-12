import React from 'react';

const PopularInsDetails = ({ popularIns }) => {
    console.log(popularIns);
    const {email, name ,photo} = popularIns
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img  src={photo} alt="Shoes" className=" h-[280px] rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email:{email}</p>
                
            </div>
        </div>
    );
};

export default PopularInsDetails;