import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import 'primeicons/primeicons.css';
import Swal from 'sweetalert2';

const MyTips = () => {
    const initialTips= useLoaderData();
    const [tips, setTips] = useState(initialTips);
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://urban-garden-server.vercel.app/sharedTips/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                            const remainingTips = tips.filter(tip => tip._id != id);
                            setTips(remainingTips);
                        }
                    })


            }
        });
    }
    return (
        <div className="bg-white rounded-md py-5">
            <h2 className='text-center text-[#2E7D32] font-bold text-2xl py-3'>My Tips</h2>
            <table className='w-11/12 mx-auto border'>
                <thead className='w-full bg-green-100'>
                    <tr>
                        <th className='text-left py-2 px-4'>Image</th>
                        <th className='text-start px-1 sm:px-4'>Title</th>
                        <th className='text-start px-1 sm:px-4'>Category</th>
                        <th className='text-center sm:text-end sm:pr-12'>Action</th>
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
                                        
                                        <Link to={`/updateTips/${tip._id}`}>
                                            <button className='btn bg-[#2e7d32] rounded-md text-[#FAFAF5] m-1 hover:text-black'>
                                            <i className="pi pi-pen-to-square"></i></button>
                                        </Link>
                                        <button onClick={()=>handleDelete(tip._id)} className='btn bg-[#2e7d32] rounded-md text-[#FAFAF5] m-1 hover:text-red-500'>
                                            <i className='pi pi-trash'></i>
                                        </button>
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

export default MyTips;