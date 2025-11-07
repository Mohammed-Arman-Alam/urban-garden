import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const FeaturedGardeners = () => {
    const [activeGardeners, setActiveGardeners] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/activeFeaturedGardeners")
        .then(res=>res.json())
        .then(data=>setActiveGardeners(data));
    },[])
    console.log(activeGardeners);
    return (
        <div className='w-10/12 mx-auto  my-10'>
            <h1 className='text-center font-bold text-3xl my-8 text-[#2E7D32]'>Featured Gardeners</h1>
            <div className="grid grid-cols-2 sm:grid-cols-6">
                 {
                activeGardeners.map(gardeners=><div className='mx-auto'>
                    <img src={gardeners.photoUrl} className='w-27 hover:w-30 rounded-full border-1 border-[#2e7d32]'></img>
                    <p className='mt-2 font-semibold text-lg'>{gardeners.name}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default FeaturedGardeners;