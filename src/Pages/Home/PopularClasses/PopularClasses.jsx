import React, { useEffect, useState } from 'react';
import PopularClassDetails from './PopularClassDetails';

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addClass')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])
    return (
        <div>
            <h1>popular classes:{popularClasses.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    popularClasses.map(popularClass => <PopularClassDetails key={popularClass._id}
                        popularClass={popularClass}
                    ></PopularClassDetails>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;