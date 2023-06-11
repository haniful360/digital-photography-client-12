import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const ManageClassDetails = ({ manageClass, refetch }) => {

    const { _id, name, image, email, instructorName, price, seat, status } = manageClass;

    const handleApproved = (manageClass) => {
        fetch(`http://localhost:5000/addClass/approved/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data);
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
                {status === 'pending' ? <button onClick={() => handleApproved(manageClass)} className="btn btn-info btn-sm capitalize w-20">Approved</button> : 'Approve'}
                <button className="btn btn-info btn-sm capitalize my-2 w-20">Denied</button>
                <Link to={`/dashboard/feedback/${_id}`}>
                    <button className="btn btn-info btn-sm capitalize w-20">Feedback</button>
                </Link>
            </th>
        </tr>
    );
};

export default ManageClassDetails;