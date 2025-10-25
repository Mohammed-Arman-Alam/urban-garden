import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/bR8bdgzD/hero-bg.jpg')] h-[300px] sm:h-[400px] bg-cover bg-center">
            <h1 className='text-base-300 font-semibold text-2xl sm:text-4xl pt-15 sm:pt-22 text-center sm:text-start sm:pl-15'>Grow Together with Nature</h1>
            <p className='text-base-300  sm:pl-15 pt-4 sm:w-6/12 text-center sm:text-start sm:text-xl'>Join UrbanGarden — a community of garden lovers sharing tips, ideas, and inspiration to make every space green and alive.</p>
            <Link to='/signUp'><button className='btn bg-base-300 ml-33 sm:ml-15 mt-4 rounded-sm text-[#2E7D32] border-3 hover:border-[#2E7D32]'>Join Community</button></Link>
        </div>
    );
};
export default HeroSection;