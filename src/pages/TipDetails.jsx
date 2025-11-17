import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const TipDetails = () => {
    const {id} = useParams();
    const {title,plantType,difficulty,description,imageUrl,category} = useLoaderData();
    const [LoadDescription, setloadDescription] = useState(false);
    console.log(LoadDescription);
    return (
        <div className="card bg-base-100 image-full sm:w-10/12 mx-auto sm:h-fit">
            <figure>
                <img
                src={imageUrl}
                alt="" className='w-full'/>
            </figure>
            <div className='card-body sm:px-30 p-5 sm:p-10'>
                
                <h2 className="card-title mx-auto text-xl sm:text-3xl font-bold">{title}</h2>
                <h3 className='text-lg sm:text-xl font-semibold mt-2'>Plant Type: {plantType}</h3>
                <h3 className='text-lg sm:text-xl font-semibold'>Category: {category}</h3>
                <h3 className='text-lg sm:text-xl font-semibold'>Difficulty: {difficulty}</h3>
                <p className='text-md sm:text-lg font-medium'>Description: <br />
                {
                    LoadDescription ?
                    <>{description}..<button onClick={()=>setloadDescription(!LoadDescription)} className='text-green-300'>see less</button></>:
                    <>{description.slice(0, 90)}...<button onClick={()=>setloadDescription(!LoadDescription)} className='text-green-300'>see more</button></>
                    
                }
                </p>
                <div className='flex justify-between'>
                    <Link to='/browseTips'><button className="btn bg-[#2e7d32] border-0 text-white text-md sm:text-lg sm:px-6">Exit</button></Link>
                    <button className="btn bg-[#2e7d32] border-0 text-white text-md sm:text-lg sm:px-6 ">Like</button>
                </div>
                
            </div>
        </div>
    );
};

export default TipDetails;