import React, { useEffect, useState } from 'react';
import ManageClassDetails from './ManageClassDetails';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet-async';

const ManagesClasses = () => {

    const { data: addClass = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-rho-beige.vercel.app/addClass')
        return res.json();
    })
    return (
       <div>
        <Helmet>
                <title>D.Photography-ManageClasses</title>
            </Helmet>
         <div className='w-full lg:px-4'>
            <h3 className='text-3xl text-center my-8'>Manage classes</h3>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className='shadow bg-base-200 '>
                        <tr>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>A.Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addClass.map(manageClass => <ManageClassDetails key={manageClass._id}
                            manageClass={manageClass}
                            refetch={refetch}
                        ></ManageClassDetails>)}
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    );
};

export default ManagesClasses;