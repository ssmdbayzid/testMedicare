import React, { createContext } from 'react'

const userAuthContext = createContext();
import { useCreateUserWithEmailAndPassword, useSign } from 'react-firebase-hooks/auth';

export const  UserAuthContextProvider =({children}) =>{
    return <UserAuthContext.Provider>{children}</UserAuthContext.Provider>
}

export const useUserAuth = () =>{
    return useContext(userAuthContext)
}

const UserAuthContext = () => {
  return (
    <div>UserAuthContext</div>
  )
}

export default UserAuthContext