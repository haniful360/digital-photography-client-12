import React, { useEffect, useState } from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const Payment = () => {
    const loadSelectedClass = useLoaderData();
    const { price } = loadSelectedClass;

    return (
        <div className='lg:w-4/6 mx-auto'>
            <h3 className='text-3xl mb-8 text-center'>Payment gateway</h3>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} />
            </Elements>
        </div>
    );
};

export default Payment;