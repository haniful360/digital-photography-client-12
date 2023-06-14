import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClassDetails = ({ selected, refetch }) => {
    const { _id, name, image, instructorName } = selected;
    const handleDelete = (selected) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/selectedClass/${selected._id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            refetch();
                            if (data.deletedCount > 1) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                
                            }
                        })
                }
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

                </div>

            </td>
            <td> {name} </td>
            <td> {instructorName} </td>
            <th>
                <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-info text-white btn-sm capitalize w-20">Pay</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(selected)} className="btn border-0 bg-red-500 hover:bg-red-600 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FaTrashAlt className='w-5 h-5 text-white  '></FaTrashAlt></button>
            </th>
        </tr>
    );
};

export default SelectedClassDetails;