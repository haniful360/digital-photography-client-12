import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SelectedClassDetails = ({ selected }) => {
    const { name, image, instructorName } = selected;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    {/* <div>{instructorName}</div> */}
                </div>

            </td>
            <td> {name} </td>
            <td> {instructorName} </td>
            <th>
            <button className="btn btn-info text-white btn-sm capitalize w-20">Pay</button>
            </th>
            <th>
                <button onClick={() => handleMakeInstructor(user)} className="btn border-0 bg-blue-400 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FaTrashAlt className='w-5 h-5 text-white  '></FaTrashAlt></button>
            </th>
        </tr>
    );
};

export default SelectedClassDetails;