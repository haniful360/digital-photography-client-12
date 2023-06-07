import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast('Login success full')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <section className="lg:min-h-screen flex items-center justify-center">

            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="email"  {...register("email", { required: true })} name="email" placeholder="Email" />
                        {errors.email && <span className='text-red-400'>Email field is required</span>}
                        <div className="relative">
                            <input className="p-2 rounded-xl border w-full" type={show ? 'text' : 'password'} {...register("password", { required: true, maxLength: 20, minLength: 6 })} name="password" placeholder="Password" />
                            {errors.password?.type === 'required' && <p className='text-red-400'>password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-400'>password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-400'>password must be less than  20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-400'>password must have one uppercase, one lowercase one number and  one special character less than 20 character</p>}
                            <span className='text-red-400'>{error}</span>
                            <p className='right-2 absolute top-3' onClick={() => setShow(!show)}>{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</p>

                        </div>
                        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
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
                        <p>Don't have an account?</p>
                        <Link to='/signUp'><button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button></Link>
                    </div>
                </div>


                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://stardatelogs.com/images/user/login.png" />
                </div>
            </div>
        </section>
    );
};

export default Login;