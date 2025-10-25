import React, {use} from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../authProvider/AuthProvider';

const Navbar = () => {
    const {user, signOutUser} = use(AuthContext);
    const handleLogOut=()=>{
        signOutUser()
        .then(()=>{
            alert('Logout Successful')
        })
        .catch((error)=>{
            alert('Unable to logout')
        })
    }
    const link =<>
                    <NavLink to='/' className={({isActive})=>(isActive && "text-[#43A047] font-bold underline")}>Home</NavLink>
                    <NavLink to='/explore' className={({isActive})=>(isActive && "text-[#43A047] font-bold underline")}>ExploreGardeners</NavLink>
                    <NavLink>BrowseTips</NavLink>
                    {
                        (user) && (
                        <>
                        <NavLink>ShareGardenTip</NavLink>
                        <NavLink>MyTips</NavLink>
                        </>)
                    }
                </>
   
    return (
    
        <div className="navbar sm:w-11/12 mx-auto py-4">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {link}
                </ul>
                    
                </div>
                <a className="text-3xl font-bold text-[#2E7D32] hidden sm:inline">UrbanGarden</a>
            </div>
            <div className="navbar-center hidden lg:flex font-semibold">
                <ul className="w-full menu menu-horizontal px-1 flex flex-nowrap gap-4  text-[16px] ">
                {link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    (user) ?
                    <>
                    <Link to='/Profile'><img src={user.photoURL} alt="profile" className='h-9 w-9 rounded-full border border-[#2e7d32]'/></Link>
                    <button onClick={handleLogOut} className="btn bg-[#2e7d32] ml-2 rounded-lg text-[#FAFAF5]">LogOut</button>
                    </>
                        
                    :
                    <>
                    <Link to='/signUp'>
                        <button className="btn bg-[#2e7d32] rounded-lg text-[#FAFAF5]">SignUp</button>
                    </Link>
                    <Link to='/login'>
                        <button className="btn bg-[#2e7d32] mr-2 rounded-lg text-[#FAFAF5]">Login</button>
                    </Link>
                    </>
                }
                
            </div>
        </div> 
    );
};

export default Navbar;