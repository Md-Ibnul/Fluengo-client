import React from 'react';
import useAuth from '../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { saveUser } from '../api/auth';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {
    const{signInWithGoogle} = useAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            saveUser(result.user)
            toast.success("Login Successfully")
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message)
        })
    }

    return (
        <div className='flex flex-col items-center'>
            <p className='divider'> Or Sign Up With </p>
            <div onClick={handleGoogleSignIn} className='border-2 rounded-full hover:bg-slate-600 transition'>
            <FcGoogle className='text-4xl m-3'/>
            </div>
        </div>
    );
};

export default SocialLogin;