import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const handleGoogleLogin = () => {
       return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        //observe auth on auth State change
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
          console.log('auth state change', currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
          unsubscribe
        }
      }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        handleGoogleLogin
    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
                
            </AuthContext.Provider>
    );
};

export default AuthProviders;