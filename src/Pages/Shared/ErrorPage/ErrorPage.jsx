import React from 'react';
// import notFound from '../../../assets/404.jpg'
import { useNavigate } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center h-[80vh] justify-center flex-col'>
            <img className='h-[100vh]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhW7NnGQ6iDsR4wfRxFJmHvhk4aWqVriKK4HKonAzbyJllxDK-4Q-BHBmNHAH5zUpKgo&usqp=CAU' alt="" />
            <button  onClick={()=>navigate('/')} className='btn bg-[#7F8FFF] hover:bg-[#7F8FFF] text-white rounded text-[20px]'><HiArrowSmLeft className='w-9'></HiArrowSmLeft>Go Back</button>
        </div>
    );
};

export default ErrorPage;