import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    //const [user, setUser] = useState(null);
    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const userInfo ={
        createUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;