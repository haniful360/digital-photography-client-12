import React, { useEffect, useState } from 'react';
import PopularClassDetails from './PopularClassDetails';
import './PopularClasses.css'

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addClass')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])
    return (
        <div className='popular-classes my-12'>
            <h1 className='text-center'>popular classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    popularClasses.slice(0.6).map(popularClass => <PopularClassDetails key={popularClass._id}
                        popularClass={popularClass}
                    ></PopularClassDetails>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;