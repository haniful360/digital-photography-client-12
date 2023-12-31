import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-rho-beige.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const instructors = data.filter(instructor =>instructor.role==='instructor')
                setAllInstructors(instructors)
            })
    }, [])



    return (
        <div className='max-w-6xl mx-auto my-16'>
            <Helmet>
                <title>D.Photography-instructor</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-0  px-2">
            {allInstructors.map(instructor => <div key={instructor._id} className="card  bg-base-100 shadow-lg">
                <figure><img className='w-full h-[300px]' src={instructor.photo} alt="instructor" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>{instructor.email}</p>
                    <p>{instructor.instructorName}</p>
                </div>
            </div>)}
            </div>
            <button className='btn btn-info btn-md text-white tracking-wider block mx-auto mt-16'>see more</button>
        </div>
    );
};

export default Instructors;