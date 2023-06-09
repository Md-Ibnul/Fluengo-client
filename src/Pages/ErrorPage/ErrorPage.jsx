import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/ErrorImage.json'
import Lottie from 'react-lottie';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorImage,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return (
        <section className='flex items-center h-screen bg-gray-100 text-gray-900'>
      <div className='container h-[100vh] w-full relative'>
      <Lottie options={defaultOptions} height={600} />
        <div className='max-w-md text-center absolute bottom-1/4 left-8'>
          <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-5'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-error'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
    );
};

export default ErrorPage;