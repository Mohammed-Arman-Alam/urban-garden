import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const UpdateTips = () => {
    const {_id,availability ,category, description, difficulty, email, imageUrl, plantType, title,userName} = useLoaderData();
    const handleUpdateTips =e=>{
        e.preventDefault();
        const form = e.target;
        const formDate = new FormData(form);
        const updatedTips = Object.fromEntries(formDate.entries());
        fetch(`https://urban-garden-server.vercel.app/sharedTips/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedTips)
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Tip updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className='sm:w-11/12 mx-auto bg-white rounded-md'>
        <div className="bg-[#66BB6A15] p-6  rounded-md">
            <h2 className="text-3xl font-bold text-[#2E7D32] mb-8 text-center border-b border-dashed p-2 border-[#2E7D32]">Update Gardening Tip</h2>
            <form onSubmit={handleUpdateTips} className="flex flex-col gap-4">
                <div>
                    <label className="font-semibold text-lg">Title</label>
                    <input type="text" name="title" defaultValue={title}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white"  required></input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Plant Type/Topic</label>
                    <input type="text" name="plantType" defaultValue={plantType}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" required></input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Difficulty Level</label>
                    <select name="difficulty"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" defaultValue={difficulty} required>
                        <option>Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Description</label>
                    <textarea name="description" rows="3" placeholder="Share your gardening tip details..."
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" defaultValue={description} required></textarea>
                </div>
                <div>
                    <label className="font-semibold text-lg">Image URL</label>
                    <input type="text" name="imageUrl" defaultValue={imageUrl} 
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white">
                </input>
                </div>
                <div>
                   <label className="font-semibold text-lg">Category</label>
                    <select name="category"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" defaultValue={category} required>
                    <option>Select Category</option>
                    <option value="Composting">Composting</option>
                    <option value="Plant Care">Plant Care</option>
                    <option value="Vertical Gardening">Vertical Gardening</option>
                </select>
                </div>
                <div>
                    <label className="font-semibold text-lg">Availability</label>
                    <select name="availability"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-0 focus:border-[#43A047] focus:border-2 focus:bg-white" defaultValue={availability} required>
                        <option>Select Availability</option>
                        <option value="Public">Public</option>
                        <option value="Hidden">Hidden</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="font-semibold text-lg">Name</label>
                    <input type="text" name="userName" value={userName} readOnly
                    className="w-full border border-gray-300 rounded-md p-2 cursor-not-allowed">
                    </input>
                </div>
                <div>
                    <label className="font-semibold text-lg">Email</label>
                    <input type="email" name="email" value={email} readOnly
                    className="w-full border border-gray-300 rounded-md p-2  cursor-not-allowed">
                    </input>
                </div>
                </div>
                <div className="text-center">
                    <button type="submit"
                    className="bg-[#2e7d32] text-white px-6 py-2 rounded-md font-semibold sm:text-lg hover:text-[#2e7d32] hover:bg-white hover:border-2 hover:border-[#2e7d32] hover:-mt-1">Update</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateTips;