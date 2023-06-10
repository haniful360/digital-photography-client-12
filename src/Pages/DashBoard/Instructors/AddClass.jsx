import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hoisting_token = import.meta.env.VITE_img_upload_token;

const AddClass = () => {
    // const {user} = useAuth();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    console.log(user.displayName);
    const { register, handleSubmit, reset } = useForm();
    const img_hoisting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`
    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hoisting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    // console.log(imgURL);
                    const { name, instructorEmail, instructorName, price, seat } = data;
                    const newItem = { name, instructorEmail, instructorName, price: parseFloat(price), seat: parseFloat(seat), image: imgURL, status:'pending' }
                    console.log(newItem);
                    axiosSecure.post('/addClass', newItem)
                    .then(data =>{
                        console.log('new class', data.data);
                    })
                }
            })
    }
    return (
        <div className=' md:w-2/4 mx-auto'>
            <div className="text-3xl text-center">Add Class</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>

                    <input type="text" placeholder="Class Name" name='name'
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" name='instructorName' placeholder="Instructor Name"
                        {...register("instructorName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " defaultValue={user?.displayName} readOnly />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" name='instructorEmail' defaultValue={user?.email} placeholder="Instructor Email"
                        {...register("instructorEmail", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " readOnly />
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" name='price' placeholder="Price"
                            {...register("price", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat*</span>
                        </label>
                        <input type="number" name='seat' placeholder="Available Seat*"
                            {...register("seat", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" name='image' {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm my-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;