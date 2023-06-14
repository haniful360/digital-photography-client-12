import React, { useEffect, useState } from 'react';
import SelectedClassDetails from './SelectedClassDetails';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';

const MySelectedClass = () => {
    // const [selectedClass, setSelectedClass] = useState([]);
    const { data: selectedClass = [], refetch } = useQuery(['selectedClass'], async () => {
        const res = await fetch('https://summer-camp-school-server-rho-beige.vercel.app/selectedClass')
        return res.json();
    })
    // useEffect(() =>{
    //     fetch(`https://summer-camp-school-server-rho-beige.vercel.app/selectedClass`)
    //     .then(res => res.json())
    //     .then(data =>setSelectedClass(data))
    // },[])
    return (
        <div>
            <Helmet>
                <title>D.Photography-EnrolledClass</title>
            </Helmet>
            <div className='w-full lg:px-4'>
        <h3 className='text-3xl text-center font-semibold my-6'>My selected class</h3>
         <div className="overflow-x-auto w-full px-2">
            <table className="table">
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
                        refetch={refetch}
                        ></SelectedClassDetails>)
                    }
                </tbody>
            </table>
        </div>
       </div>
        </div>
    );
};

export default MySelectedClass;