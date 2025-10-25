import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const SignUp = () => {
    const {createUser}= use(AuthContext);
    const [errorMessage, setErroMessage]= useState(null);    
    const handleSignUp =(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password}= Object.fromEntries(formData.entries());
        createUser(email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            setErroMessage(error.message);
        })
    }
    return (
        <div className="hero bg-base-100 rounded-2xl py-5">
            <div className="hero-content flex-col lg:flex-row sm:w-11/12">
                <div>
                <h1 className="text-5xl font-bold text-center sm:text-start">Welcome to  <span className='text-[#2E7D32] font-bold'>UrbanGarden</span></h1>
                <p className="py-5 w-9/12 text-[#2E7D3280] hidden sm:inline-flex">
                    Are you someone who loves gardening? Sign up now to join our gardeners’ community and explore the wonderful world of gardening!
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body bg-[#2E7D3215] rounded-xl">
                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label font-semibold">Name</label>
                        <input type="text" className="input rounded-xl" placeholder="Name"  name='name' />
                        <label className="label font-semibold">Profile Picture</label>
                        <input type="text" className="input rounded-xl" placeholder="Photo Url" name='url' />
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input rounded-xl" placeholder="Email" name='email' required/>
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input rounded-xl" placeholder="Password" name='password' required/>
                        <button type='submit' className="btn mt-4 bg-[#2E7D32] font-bold text-white text-xl">SignUp</button>
                    </form>
                    <p className='text-center'>Already have an account? Please <Link to="/Login" className='text-[#2E7D32] font-bold'>login</Link></p>
                    <>
                        {
                            (errorMessage =="Firebase: Error (auth/email-already-in-use).") ?
                            (<p>Email already in use please <Link to="/Login" className='text-[#2E7D32] font-bold'>login</Link> or use other email.</p>) 
                            : (
                                <p className='text-center text-red-500 font-semibold text-sm'>{errorMessage}</p>
                            )
                        }
                    </>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;