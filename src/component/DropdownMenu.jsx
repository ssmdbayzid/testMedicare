import { authContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({open, setOpen}) => {
    const {user, role, dispatch} = useContext(authContext)
    const signUp = () =>  {
        dispatch({
            type: "LOGOUT"
        })
        setOpen(!open)
    }
  return (
    <div
    style={{lineHeight: "100%"}}
    className={`${!open ? "-top-full  " : "top-28  opacity-1 " } absolute bg-[var(--my-color)]  rounded-lg shadow-md px-2 w-full transition-all duration-500 `}>
        
        <button
        onClick={()=>signUp()}
        className="text-center text-lg block my-3 w-full bg-[var(--primary-color)] py-1.5 rounded-md" >Sign Out</button>
    </div>
  )
}

export default DropdownMenu