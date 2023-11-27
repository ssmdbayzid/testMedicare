import { authContext } from 'context/AuthContext'
import { selectCurrentToken, selectCurrentRole } from 'features/auth/authSlice';
import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';



const PrivateRoute = ({children, allowedRoles}) => {
  // const {token, role} = useContext(authContext)
  const token = useSelector(selectCurrentToken)
  const role  = useSelector (selectCurrentRole)
  const location = useLocation() 
  
  if(role !== allowedRoles.includes(role)){
    toast.error("Access invalid")    
    return <Navigate to="/home" />
  } 

  const isAllowed = allowedRoles.includes(role);
  const accessableRoute = token && isAllowed ? children 
  :  <Navigate to="/login" state={{from: location}} replace />
  return accessableRoute;
}

export default PrivateRoute