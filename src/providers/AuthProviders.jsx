import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // googleSignIn
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // twitter signIn
    const twitterSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                axios.post('https://summer-camp-school-server-rho-beige.vercel.app/jwt',{email:currentUser.email})
                .then(data =>{
                    // console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
            // console.log(currentUser);

        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = { user, createUser, signInUser, logOut, googleSignIn, twitterSignIn, updateUserProfile, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;