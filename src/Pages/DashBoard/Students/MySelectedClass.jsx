import React, { useEffect, useState } from 'react';
import SelectedClassDetails from './SelectedClassDetails';

const MySelectedClass = () => {
    const [selectedClass, setSelectedClass] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/addClass`)
        .then(res => res.json())
        .then(data =>setSelectedClass(data))
    },[])
    return (
        <div className='w-full lg:px-4'>
        <h3 className='text-3xl text-center font-semibold my-6'>My selected class</h3>
         <div className="overflow-x-auto w-full px-2">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>IMG</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Pay</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        selectedClass.map(selected =><SelectedClassDetails
                        key={selected._id}
                        selected={selected}
                        ></SelectedClassDetails>)
                    }
                </tbody>
            </table>
        </div>
       </div>
    );
};

export default MySelectedClass;