import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassDetails from './ClassDetails';

const Classes = () => {
    const [classes, setAllClasses] = useState([])
    useEffect(() =>{
        fetch('https://summer-camp-school-server-rho-beige.vercel.app/addClass')
        .then(res => res.json())
        .then(data =>{
            const approved = data.filter(approve => approve.status==='approved')
            setAllClasses(approved)
        })
    },[])
    return (
        <div className='max-w-6xl mx-auto my-16'>
            <Helmet>
                <title>D.Photography-Classes</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {classes.map(classItem =><ClassDetails
                key={classItem._id}
                classItem={classItem}
                ></ClassDetails>)}
            </div>
        </div>
    );
};

export default Classes;