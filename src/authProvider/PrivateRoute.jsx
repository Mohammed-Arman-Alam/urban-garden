import React from 'react';
import { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    if(loading){
        return <h1 className='my-100 mx-50'>Loading</h1>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/Login'></Navigate>;
    
};
export default PrivateRoute;
