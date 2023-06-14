import React, { useEffect, useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const ClassDetails = ({ classItem }) => {
    const { user } = useAuth();
    const navigate = useNavigate();


    const [disabled, setDisabled] = useState(false);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { name, instructorName, seat, price, image } = classItem;
    const handleSelect = (classItem) => {
        if (user) {
            delete classItem._id
            axios.post(`https://summer-camp-school-server-rho-beige.vercel.app/selectedClass`, classItem)
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
                    setDisabled(true)
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Select Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card bg-base-100 shadow-md">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Name:{instructorName}</p>
                <p>Available seats:{seat}</p>
                <p>price:${price}</p>
                <div className="card-actions justify-end">
                    {!isAdmin && !isInstructor ? <button onClick={() => handleSelect(classItem)} disabled={disabled}  className="btn btn-info btn-md capitalize text-white tracking-wider">Select</button> : <button disabled className="btn btn-info btn-md capitalize text-white tracking-wider">Select</button>}
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;
