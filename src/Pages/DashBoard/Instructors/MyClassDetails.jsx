import React from 'react';

const MyClassDetails = ({singleClass}) => {
    const {name, email, image, instructorName,price, seat, status} = singleClass;
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
            <button className="btn btn-info btn-sm capitalize w-20">{status}</button>
            </th>
        </tr>
    );
};

export default MyClassDetails;