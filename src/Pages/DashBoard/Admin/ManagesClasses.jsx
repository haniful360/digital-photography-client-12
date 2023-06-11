import React, { useEffect, useState } from 'react';
import ManageClassDetails from './ManageClassDetails';

const ManagesClasses = () => {
    const [manageClasses, setManageClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addClass')
            .then(res => res.json())
            .then(data => setManageClasses(data))
    }, [])
    return (
        <div className='w-full lg:px-4'>
            <h3 className='text-3xl text-center my-4'>manage classes:{manageClasses.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>A.Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageClasses.map(manageClass => <ManageClassDetails key={manageClass._id}
                            manageClass={manageClass}
                        ></ManageClassDetails>)}

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManagesClasses;