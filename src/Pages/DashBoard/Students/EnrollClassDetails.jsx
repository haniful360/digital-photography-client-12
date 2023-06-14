import React from 'react';

const EnrollClassDetails = ({ enroll, index }) => {
    const { date, email, photo, price, status } = enroll;
    return (
        <tr>
            <th>{index +1}.</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <td>{status}</td>
            <td>{date}</td>
        </tr>
    );
};

export default EnrollClassDetails;