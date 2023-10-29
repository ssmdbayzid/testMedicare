import { authContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({openMenu, setOpenMenu}) => {
    const {user, role, dispatch} = useContext(authContext)
    const signUp = () =>  {
        dispatch({
            type: "LOGOUT"
        })
        setOpenMenu(!openMenu)
    }
  return (
    <div
    style={{lineHeight: "100%"}}
    className="absolute bg-[var(--my-color)] mt-3 w-64 right-56 top-20  rounded-lg shadow-md p-2">
        <h1 className="text-center text-xl px-3 text-[var(--primary-color)] my-2">{user.name}</h1>
        <p className="text-center mb-3">{user.email}</p>
        <hr />

        <Link to={role === "patient" ? "users/profile/me"
        : "doctors/profile/me"}
        onClick={()=> setOpenMenu(!openMenu)}
        className="text-center text-lg block my-3 " >Profile</Link>
        <Link to={role === "patient" ? "dashboard/users"
        : "dashboard/doctors"}
        onClick={()=> setOpenMenu(!openMenu)}        
        className="text-center text-lg block my-3 " >Dashboard</Link>
        <button
        onClick={()=>signUp()}
        className="text-center text-lg block my-3 w-full bg-[var(--primary-color)] py-1.5 rounded-md" >Sign Out</button>
    </div>
  )
}

export default DropdownMenu