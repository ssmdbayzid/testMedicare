
import { selectCurrentToken, selectCurrentRole, logOut } from 'features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';


const PrivateRoute = ({children, allowedRoles}) => {
  // const {token, role} = useContext(authContext)
  const token = useSelector(selectCurrentToken)  
  const role = useSelector(selectCurrentRole)  

  const location = useLocation()     
  const dispatch = useDispatch()

  if(!allowedRoles.includes(role)){
    dispatch(logOut())    
  }   

  const isAllowed = allowedRoles.includes(role);
  const accessableRoute = token && isAllowed ? children 
  :  <Navigate to="/login" state={{from: location}} replace />  
  return accessableRoute;
}

export default PrivateRoute