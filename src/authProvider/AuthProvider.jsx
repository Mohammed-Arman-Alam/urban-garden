import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider;
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    } 
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const updateUser=(updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData);
    }
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[])
    const userInfo ={
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUser,
        loading
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;