import React from 'react';

const ManageClassDetails = ({ manageClass }) => {
    const { name, image, email, instructorName, price, seat, status } = manageClass;
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
                <button className="btn btn-ghost btn-xs">{status}</button>
            </th>
            <th>
                <button className="btn btn-info btn-sm capitalize w-20">Approved</button>
                <button className="btn btn-info btn-sm capitalize my-2 w-20">Denied</button>
                <button className="btn btn-info btn-sm capitalize w-20">Feedback</button>
            </th>
        </tr>
    );
};

export default ManageClassDetails;