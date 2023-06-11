import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MyClassDetails = ({singleClass}) => {
    const {_id,name, email, image, instructorName,price, seat, status} = singleClass;
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
            <th>
            <Link to={`/dashboard/updateClass/${_id}`}>

                <button className="btn border-0 bg-red-600 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FaEdit className='w-5 h-5 text-white  '></FaEdit></button>
            
            </Link>
            
            <button className="btn border-0 mt-2 bg-red-600 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FcFeedback className='w-5 h-5 text-white'></FcFeedback></button>
            </th>
            {/* <Link to={`/updateClass/${_id}`}><button>xxx</button></Link> */}
        </tr>
    );
};

export default MyClassDetails;