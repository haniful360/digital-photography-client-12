import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
// import { FaUsers } from 'react-icons/fa';
// import { AuthContext } from '../providers/AuthProviders';
// import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // const {user} = useContext(AuthContext);
    // console.log(user.role);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log('isAdmin',isAdmin);
    // console.log('isInstructor',isInstructor);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 h-full w-80 text-base-content bg-[#134ba5cb]">



                    {isAdmin ? <><li><NavLink to='/'><h2 className='text-3xl'>Photography</h2></NavLink></li>

                        <li><NavLink to='/dashboard/manageUsers'>Manage users</NavLink></li>
                        <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li></> : isInstructor ? <>
                            <li><NavLink to='/'><h2 className='text-3xl'> Photography</h2></NavLink></li>

                            <li><NavLink to='/dashboard/addClass'>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/myClass'>My  Class</NavLink></li>
                        </> : <><li><NavLink to='/'><h2 className='text-3xl'> Photography</h2></NavLink></li>

                        <li><NavLink to='/dashboard/selectedClasses'> Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/enrolledClasses'>Enrolled Classes</NavLink></li>
                        
                        </>}
                        

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;