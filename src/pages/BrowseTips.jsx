import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router';

const BrowseTips = () => {
    const [tips, setTips] = useState([]);
    useEffect(()=>{
        fetch("https://urban-garden-server.vercel.app/sharedTips")
        .then(res=>res.json())
        .then(data =>setTips(data));
    },[])
    return (
         <div className="bg-white rounded-md py-5">
            <h2 className='text-center text-[#2E7D32] font-bold text-2xl py-3'>Gardening Tips</h2>
            <table className='w-11/12 mx-auto border'>
                <thead className='w-full bg-green-100'>
                    <tr>
                        <th className='text-left py-2 px-4'>Image</th>
                        <th className='text-start px-1 sm:px-4'>Title</th>
                        <th className='text-start px-1 sm:px-4'>Category</th>
                        <th className='text-center sm:text-end sm:pr-12'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tips.length > 0 ?
                        (
                            tips.map(tip=>
                                <tr key={tip._id} className='text-center bg-[#FAF8E8] border border-gray-300'>
                                    <td className='p-2'><img src={tip.imageUrl} alt="url broken" className='rounded-sm w-15 sm:w-30'/></td>
                                    <td className='text-start px-1 sm:px-4'>{tip.title}</td>
                                    <td className='text-start px-1 sm:px-4'>{tip.category}</td>
                                    <td className='text-center sm:text-end sm:px-4'>
                                        <Link to={`details/${tip._id}`}>
                                            <button className='btn bg-[#2e7d32] rounded-md text-[#FAFAF5] m-1 hover:text-black'>see more</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center text-green-700 py-6 sm:text-2xl sm:font-bold'>No Public Tips Available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
         </div>
    );
};

export default BrowseTips;