import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const Login = () => {
    const {signInUser}= use(AuthContext);
        const [errorMessage, setErroMessage]= useState(null);    
        const handleLogin =(e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            signInUser(email, password)
            .then(user=>{
                console.log(user);
            })
            .catch(error=>{
                setErroMessage(error.message);
            });
        }
        return (
            <div className="hero bg-base-100 rounded-2xl py-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <h1 className="text-5xl font-bold text-center">Welcome back to  <span className='text-[#2E7D32] font-bold'>UrbanGarden</span></h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body bg-[#2E7D3215] rounded-xl">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label font-semibold">Email</label>
                            <input type="email" className="input rounded-xl" placeholder="Email" name='email' required/>
                            <label className="label font-semibold">Password</label>
                            <input type="password" className="input rounded-xl" placeholder="Password" name='password' required/>
                            <button type='submit' className="btn mt-4 bg-[#2E7D32] font-bold text-white text-xl">Login</button>
                        </form>
                        <p className='text-center'>New to UrbanGarden? Please <Link to="/signUp" className='text-[#2E7D32] font-bold'>SignUp</Link></p>
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
}
export default Login;