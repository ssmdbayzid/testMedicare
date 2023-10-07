
import { auth } from 'firebase.init';
import React, { createContext, useEffect, useState } from 'react'

import {
  useCreateUserWithEmailAndPassword,  
  useAuthState,
  useSignOut, useContext, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


  const AuthContext = createContext();

  export const useAuth  = () => {
    return useContext(AuthContext)
  }

  const  AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null);


    // Signup 
    const signUp = (email, password) => {
        setLoading(true)
        return useCreateUserWithEmailAndPassword(auth, email, password)
      }
    
      // Login
      const login = (email, password) => {
        setLoading(true)
        return useSignInWithEmailAndPassword(auth, email, password)
      }

      const logOut = () =>{
        localStorage.removeItem("auth-token")
        return useSignOut(auth)
      }

      useEffect(()=> {
        const unsubscribe = useAuthState(auth, currentUser => {
          console.log(currentUser);
          setUser(currentUser);
          setLoading(false)
        });
        return () => {
          return unsubscribe()
        }
      },[]);

      const  authInfo = {
        user,
        loading,
        signUp,
        login,
        logOut
      }

      return (<AuthContext.Provider>
              {children}
              </AuthContext.Provider>)
    }

    export default AuthProvider;


 




  

  /*
export const  UserAuthContextProvider =({children}) =>{
  

  const [user, setUser] = useState("")

 const signUp = (email, password) =>{
    return useCreateUserWithEmailAndPassword(auth, email, password)
  }
  // Login
  const Login = (email, password) =>{
    return useSignWithUserAndPassword(auth, email, password)
  }
  // Sign Out
  const signout = (email, password) =>{
    return useSignOut(auth, email, password)
  }

  useEffect(()=> {
    const unsubscribe = useAuthState(auth, (currentUser)=>{
      setUser(currentUser)
    });

    return ()=> {
      unsubscribe()
    }
  },[])


    return <UserAuthContext.Provider>{children}</UserAuthContext.Provider>
}



export const useUserAuth = () =>{
    return useContext(userAuthContext)
}
*/