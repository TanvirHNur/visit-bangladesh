

import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../components/login/firebase/firebase-init";

initializeFirebaseAuth();

const useFirebase=()=>{
    const  [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth=getAuth();
    const GoogleProvider=new GoogleAuthProvider();



    const signInWithGoogle=()=>{
          return  signInWithPopup(auth, GoogleProvider)
            
    }
     
    const createUser=(name, email, password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }


    // login
    const login = (email, password) => {
           return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
            setError('Logged out Successfully')
        })
        .finally( () => {
            setIsLoading(false);
          })
        .catch(error =>{
            setError(error.message)
        })
    }

    useEffect( ()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            
            setIsLoading(false)
        })
    } , [auth])
    return {
        auth,
        user,
        setUser,
        setError,
        error,
        createUser,
        updateProfile,
        login,
        signInWithGoogle,
        setIsLoading,
        isLoading,
        logOut
        
    }
}
export default useFirebase;