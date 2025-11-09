import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signInUser, signInWithGoogle}= use(AuthContext);
        const [errorMessage, setErroMessage]= useState(null);    
        const handleLogin =(e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            signInUser(email, password)
            .then(user=>{
                Swal.fire({
                        title: "Login Successful!",
                        icon: "success",
                        draggable: true
                        });
                        setErroMessage("");
            })
            .catch(error=>{
                setErroMessage(error.message);
                Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong",
                            });
            });
        }
        const handlesignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
        return (
            <div className="hero bg-base-100 rounded-2xl py-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                    <h1 className=" text-3xl sm:text-5xl font-bold text-center">Welcome back to  <span className='text-[#2E7D32] font-bold'>UrbanGarden</span></h1>
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
                        <button onClick={handlesignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] font-semiBold text-lg">
                            <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
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