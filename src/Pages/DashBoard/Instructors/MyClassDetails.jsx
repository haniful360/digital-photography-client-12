import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MyClassDetails = ({ singleClass }) => {
    const { _id, name, email, image, instructorName, price, seat, status } = singleClass;
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
                {/* Open the modal using ID.showModal() method */}
                <button className="btn" onClick={() => window.feedback.showModal()}>open</button>
                <dialog id="feedback" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
                
            </th>

            
        </tr>
    );
};

export default MyClassDetails;