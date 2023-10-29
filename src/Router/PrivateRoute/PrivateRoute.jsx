import { authContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const PrivateRoute = ({children, allowedRoles}) => {
  const {token, role} = useContext(authContext)

  /*
  if(role != allowedRoles.includes(role)){
    toast.error("Access invalid")    
    return <Navigate to="/home" />
  } 
*/
  const isAllowed = allowedRoles.includes(role);
  const accessableRoute = token && isAllowed ? children 
  :  <Navigate to="/login" replace={true} />
  return accessableRoute;
}

export default PrivateRoute