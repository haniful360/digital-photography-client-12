import React, { useEffect, useState } from 'react';
import PopularInsDetails from './PopularInsDetails';
const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const instructor = data.filter(ins => ins.role === "instructor")
                setPopularInstructor(instructor);
            })
    }, [])
    return (
        <div className='popular-instructor my-12'>
            <h1 className='text-center'>popular Instructor:{popularInstructor.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    popularInstructor.slice(0, 6).map(popularIns => <PopularInsDetails key={popularIns._id}
                        popularIns={popularIns}
                    ></PopularInsDetails>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;
