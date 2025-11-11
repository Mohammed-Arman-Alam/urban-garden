import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider;
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    } 
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }
    const signOutUser =()=>{
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
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
        updateUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;