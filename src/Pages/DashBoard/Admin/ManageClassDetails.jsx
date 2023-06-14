import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClassDetails = ({ manageClass, refetch }) => {
    const [isApproved, setIsApproved] = useState(false);
    const [isDenied, setIsDenied] = useState(false);

    const { _id, name, image, email, instructorName, price, seat, status } = manageClass;

    const handleApproved = (manageClass) => {
        fetch(`https://summer-camp-school-server-rho-beige.vercel.app/addClass/approved/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire('Approved this course')
                }
                setIsApproved(true)
            })
    }
    const handleDenied = (manageClass) => {
        fetch(`https://summer-camp-school-server-rho-beige.vercel.app/addClass/denied/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire('Denied This Class')
                }
                setIsDenied(true)
            })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>{instructorName}</div>
                </div>

            </td>
            <td>
                {name}
            </td>
            <td>{email}</td>
            <td>{seat}</td>

            <td>${price}</td>
            <th>
                {status  ? <button onClick={() => handleApproved(manageClass)} disabled={isDenied} className="btn btn-info btn-sm capitalize w-20">Approved</button> : 'Approve'} <br />

               {status ? <button onClick={() => handleDenied(manageClass)} disabled={isApproved} className="btn btn-info btn-sm capitalize my-2  w-20">Denied</button>:''}<br />

                <Link to={`/dashboard/feedback/${_id}`}>
                    <button className="btn btn-info btn-sm capitalize w-20">Feedback</button>
                </Link>
            </th>
        </tr>
    );
};

export default ManageClassDetails;