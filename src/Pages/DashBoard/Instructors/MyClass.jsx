import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyClassDetails from './MyClassDetails';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
    const { user } = useAuth();
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`https://summer-camp-school-server-rho-beige.vercel.app/instructor?email=${user.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    return (
       <div>
        <Helmet>
                <title>D.Photography-MyClass</title>
            </Helmet>
        <h3 className='text-3xl text-center font-semibold my-6'>My class</h3>
         <div className="overflow-x-auto w-full px-2">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th>IMG</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>A.Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map(singleClass => <MyClassDetails key={singleClass._id}
                        singleClass={singleClass}
                        ></MyClassDetails>)
                    }
                </tbody>
            </table>
        </div>
       </div>
    );
};

export default MyClass;