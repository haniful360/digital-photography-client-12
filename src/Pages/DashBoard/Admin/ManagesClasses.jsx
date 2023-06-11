import React, { useEffect, useState } from 'react';
import ManageClassDetails from './ManageClassDetails';
import { useQuery } from 'react-query';

const ManagesClasses = () => {
    // const [manageClasses, setManageClasses] = useState([]);
    const { data: addClass = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/addClass')
        return res.json();
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/addClass')
    //         .then(res => res.json())
    //         .then(data => setManageClasses(data))
    // }, [])
    return (
        <div className='w-full lg:px-4'>
            <h3 className='text-3xl text-center my-4'>manage classes:{addClass.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
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
    );
};

export default ManagesClasses;