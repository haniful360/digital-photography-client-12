import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EnrollClassDetails from './EnrollClassDetails';

const MyEnrolledClass = () => {
    const [enrolled, setEnrolled] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setEnrolled(data))
    }, [])

    return (
        <div className='w-5/6 mx-auto'>
            <Helmet>
                <title>-EnrolledClass</title>

            </Helmet>
            <h2 className='text-3xl my-8  text-center'>My Enrolled Classes</h2>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SI No</th>
                            <th>Images</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((enroll,index) =><EnrollClassDetails
                            key={enroll._id}
                            enroll={enroll}
                            index={index}
                            ></EnrollClassDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;