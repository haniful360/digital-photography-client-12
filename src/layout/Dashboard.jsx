import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProviders';

const Dashboard = () => {
    // const {user} = useState(AuthContext);
    
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

                        
                        {isAdmin ? <>
                            <li><NavLink to='/'><h2 className='text-3xl'>Photography</h2></NavLink></li>


                            
                            <li><NavLink to='/dashboard/manageUsers'>Manage users</NavLink></li>
                            <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                        </> : <>

                            <li><NavLink to='/'><h2 className='text-3xl'> Photography</h2></NavLink></li>

                            <li><NavLink to='/dashboard/enrolledClasses'>My Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/selectedClasses'>My selected Classes</NavLink></li>
                            
                        </>
                        }
                        
                    </ul>

            </div>
        </div>
    );
};

export default Dashboard;