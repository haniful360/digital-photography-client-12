import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUser, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const [adminDisabled, setAdminDisabled] = useState(false)
    const [instructorDisabled, setInstructorDisabled] = useState(false)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setAdminDisabled(true)
            })
    }
    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setInstructorDisabled(true)
            })
    }
    return (
        <div>
            <Helmet>
                <title>-ManageUsers</title>
            </Helmet>
            <div className='md:w-5/6 mx-auto'>

                <h3 className="text-3xl font-semibold">Manage User: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                <th>sl.n</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>admin</th>
                                <th>instructor</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}.</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} disabled={instructorDisabled} className="btn border-0 bg-red-600 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FaUserShield className='w-5 h-5 text-white '></FaUserShield></button>}
                                    </td>
                                    <td>
                                        {user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} disabled={adminDisabled} className="btn border-0 bg-red-600 px-2 w-9 h-9 rounded-full btn-sm capitalize"><FaUser className='w-5 h-5 text-white  '></FaUser></button>}
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;


