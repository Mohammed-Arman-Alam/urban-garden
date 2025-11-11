import React, { use, useEffect } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const ShareGardeningTips = () => {
    const {user} = use(AuthContext);
    const handleShareTips =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formDate = new FormData(form);
        const sharedTips = Object.fromEntries(formDate.entries());
        fetch('http://localhost:3000/sharedTips',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(sharedTips)
            })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                        title: "Tip Shared Successfully",
                        icon: "success",
                        draggable: true
                        });
            }
        })
       
    };
    return (
        <div className='sm:w-11/12 mx-auto bg-white'>
        <div className="bg-[#66BB6A15] p-6  rounded-md">
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-8 text-center border-b border-dashed p-2 border-[#2E7D32]">Share a Gardening Tip</h2>
            <form onSubmit={handleShareTips} className="flex flex-col gap-4">
                <div>
                    <label className="font-semibold text-lg">Title</label>
                    <input type="text" name="title" placeholder="Tip Title"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white"  required></input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Plant Type/Topic</label>
                    <input type="text" name="plantType" placeholder="Type of plant/Topic"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required></input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Difficulty Level</label>
                    <select name="difficulty"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required>
                        <option>Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Description</label>
                    <textarea name="description" rows="3" placeholder="Share your gardening tip details..."
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required></textarea>
                </div>
                <div>
                    <label className="font-semibold text-lg">Image URL</label>
                    <input type="text" name="imageUrl" placeholder='Share image url' 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white">
                </input>
                </div>
                <div>
                   <label className="font-semibold text-lg">Category</label>
                    <select name="category"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required>
                    <option>Select Category</option>
                    <option value="Composting">Composting</option>
                    <option value="Plant Care">Plant Care</option>
                    <option value="Vertical Gardening">Vertical Gardening</option>
                </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Availability</label>
                    <select name="availability"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required>
                        <option>Select Availability</option>
                        <option value="Public">Public</option>
                        <option value="Hidden">Hidden</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="font-semibold text-lg">Name</label>
                    <input type="text" name="userName" value={user?.displayName} readOnly
                    className="w-full border border-gray-300 rounded-md p-2 cursor-not-allowed">
                    </input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Email</label>
                    <input type="email" name="email" value={user?.email} readOnly
                    className="w-full border border-gray-300 rounded-md p-2  cursor-not-allowed">
                    </input>
                </div>
                </div>
                <div className="text-center">
                    <button type="submit"
                    className="bg-[#2e7d32] text-white px-6 py-2 rounded-md font-semibold sm:text-lg hover:text-[#2e7d32] hover:bg-white hover:border-2 hover:border-[#2e7d32] hover:-mt-1">Submit</button>
                </div>
            </form>
        </div>
        </div>

    );
};

export default ShareGardeningTips;