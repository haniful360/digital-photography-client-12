
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import { FaHistory, FaHome, FaWallet } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { BiSelectMultiple } from 'react-icons/bi';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdClass, MdManageAccounts } from 'react-icons/md';
import { motion } from "framer-motion"


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (

        <div>
            <Helmet>
                <title>photography-Dashboard</title>
            </Helmet>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full w-80 text-base-content bg-[#134ba5cb]">



                        {isAdmin ? <><li><NavLink to='/'><h2 className='text-3xl'>Photography</h2></NavLink></li>
                            <motion.li
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >

                                <li><NavLink to='/dashboard/manageUsers'><MdManageAccounts />Manage users </NavLink></li>
                            </motion.li>

                            <li><NavLink to='/dashboard/manageClasses'><MdClass />Manage Classes</NavLink></li></> : isInstructor ? <>
                                <li><NavLink to='/'><h2 className='text-3xl'> Photography</h2></NavLink></li>

                                <li><NavLink to='/dashboard/addClass'><AiFillFileAdd></AiFillFileAdd>Add a Class</NavLink></li>
                                <li><NavLink to='/dashboard/myClass'>My  Class</NavLink></li>
                            </> : <><li><NavLink to='/'><h2 className='text-3xl'> Photography</h2></NavLink></li>

                            <li><NavLink to='/dashboard/selectedClasses'> <BiSelectMultiple></BiSelectMultiple>Selected Classes</NavLink></li>
                            <li><NavLink to='/dashboard/enrolledClasses'>Enrolled Classes</NavLink></li>
                            <li><NavLink to='/dashboard/paymentHistory'><FaHistory></FaHistory>Payment History</NavLink></li>

                        </>}

                        <div className='divider'></div>
                        <li><NavLink to='/'> <FaHome /> Home</NavLink></li>
                        <li><NavLink to='/instructors'><GiTeacher></GiTeacher>Instructor</NavLink></li>
                        <li><NavLink to='/classes'><SiGoogleclassroom /> Classes</NavLink></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;