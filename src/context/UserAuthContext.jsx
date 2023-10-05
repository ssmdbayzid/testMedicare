
import React, { createContext, useEffect } from 'react'

const userAuthContext = createContext();
import {
  useCreateUserWithEmailAndPassword,
  useSignWithUserAndPassword,
  useAuthState,
  useSignOut, useContext } from 'react-firebase-hooks/auth';

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
