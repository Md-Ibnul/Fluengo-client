import React from 'react';
import Title from '../../Shared/Title';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Key}`)

const PayOnline = () => {
    const cls = useLoaderData()
    return (
        <div className='min-h-screen'>
            <Title title="Payment Here"/>
            <div className='mx-auto text-xl font-bold'>
                Price: {cls.price}
                <Elements stripe={stripePromise}>
                    <CheckoutForm cls={cls}/>
                </Elements>
            </div>
        </div>
    );
};

export default PayOnline;