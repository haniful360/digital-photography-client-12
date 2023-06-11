import React, { useEffect } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import axios from 'axios';
import Swal from 'sweetalert2';
// import axios from 'axios';

const ClassDetails = ({ classItem }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { _id, name, instructorName, seat, price, image } = classItem;
    const handleSelect = (classItem) => {
        // fetch('http://localhost:5000/selectedClass', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(classItem)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        axios.post(`http://localhost:5000/selectedClass`, classItem)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Select the course',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Name:{instructorName}</p>
                <p>Availabel seats:{seat}</p>
                <p>price:${price}</p>
                <div className="card-actions justify-end">
                    {!isAdmin && !isInstructor ? <button onClick={() => handleSelect(classItem)} className="btn btn-info btn-md capitalize text-white tracking-wider">Select</button> : <button disabled className="btn btn-info btn-md capitalize text-white tracking-wider">Select</button>}
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;