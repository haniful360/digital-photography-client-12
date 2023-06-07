import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
            })
            .catch(error => {})
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

    return (
        <div className="navbar fixed bg-opacity-30 bg-black z-10 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Photography</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className='flex  gap-3'>
                    <button className='btn capitalize' onClick={handleLogout}>Logout</button>
                    <img className='w-10 h-10 ring ring-green-500 rounded-full' src={user.photoURL} alt="user" />
                </div> : <Link to='/login' className="btn capitalize tracking-wider">Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;