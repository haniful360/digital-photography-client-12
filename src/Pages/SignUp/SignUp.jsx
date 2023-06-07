import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
                // setError(err.message)
            })

        if (data.password !== data.confirmPassword) {
            return setError("Your password is don't match")
        }

    }

    return (
        <section className="bg-gray-50 lg:min-h-screen flex items-center justify-center">

            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                <div className="md:w-3/4 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">SignUp</h2>
                    <p className="text-xs mt-4 text-[#002D74]">Create your account</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <input className="p-2 mt-4 rounded-xl border" type="name"  {...register("name", { required: true })} name="name" placeholder="Name" />
                        {errors.name && <span className='text-red-400'>Name field is required</span>}
                        <input className="p-2 rounded-xl border" type="text"  {...register("photoURL", { required: true })} name="photoURL" placeholder="PhotoURL" />
                        {errors.photoURL && <span className='text-red-400'>PhotoURL  field is required</span>}
                        <input className="p-2 rounded-xl border" type="email"  {...register("email", { required: true })} name="email" placeholder="Email" />
                        {errors.email && <span className='text-red-400'>Email field is required</span>}
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={show ? 'text' : "password"}  {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className='text-red-400'>password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-400'>password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-400'>password must be less than  20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-400'>password must have one uppercase, one lowercase one number and  one special character less than 20 character</p>}
                            <p className='right-2 absolute top-3' onClick={() => setShow(!show)}>{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</p>
                        </div>
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={confirmShow ? 'text' : 'password'}  {...register("confirmPassword", { required: true, maxLength: 20, minLength: 6 })} name="confirmPassword" placeholder="ConfirmPassword" />
                            {errors.confirmPassword?.type === 'required' && <span className='text-red-400'>confirmPassword field is required</span>}
                            {errors.confirmPassword?.type === 'minLength' && <p className='text-red-400'>password must be 6 characters</p>}
                            <p className='right-2 absolute top-3' onClick={() => setConfirmShow(!confirmShow)}>{confirmShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</p>
                            <span className='text-red-400'>{error}</span>
                        </div>

                        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">SignUp</button>
                    </form>
                    {/* or */}
                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <SocialLogin></SocialLogin>

                    <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                        <p>Already have an account?</p>
                        <Link to='/login'><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
                    </div>
                </div>


                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://stardatelogs.com/images/user/login.png" />
                </div>
            </div>
        </section>
    );
};

export default SignUp;