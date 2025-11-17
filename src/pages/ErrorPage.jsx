import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <h1 className="text-3xl sm:text-6xl text-center mt-8 mb-4  font-bold text-green-700">Error(404)</h1>
            <div className='text-center font-semibold text-[#00000050] sm:text-xl sm:mb-2'>we can’t find the page you’re looking for</div>
            <div className='text-center font-bold'>Click link below </div>
            <div className='text-center my-4'>
                <Link to ='/' className='text-2xl font-bold text-green-700'>home</Link>
            </div> 
        </div>
    );
};

export default ErrorPage;