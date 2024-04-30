
import { selectCurrentToken, selectCurrentRole, logOut } from 'features/auth/authSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const PrivateRoute = ({children, allowedRoles}) => {
  
  const token = useSelector(selectCurrentToken)  
  const role = useSelector(selectCurrentRole)  
  const location = useLocation()     
  const navigate = useNavigate()

  const isAllowed = allowedRoles.includes(role)
  if(token && !isAllowed){
    toast.error("Only patient can book an appointment")      
return <Navigate to="/home" />      
  }if(!token) {
   return <Navigate to="/login" state={{from: location}} replace />  
  }else{
    return children    
  }
  
}

export default PrivateRoute