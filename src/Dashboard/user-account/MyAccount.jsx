import { authContext } from 'context/AuthContext'
import React, { useContext } from 'react'

const MyAccount = () => {
  const {user} = useContext(authContext)
  return (
    <div className="max-w-[1770px] px-5 mx-auto">
      <div className="grid grid-cols-3 gap-10">
        <div className="pb-12 px-7 rounded-md">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
              <img 
              src={user.photo}
              alt=""
              srcset="" 
              className="w-full h-full rounded-full"
              />
            </figure>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg leading-7 text-headingColor font-bold">
              {user.name}
            </h3>
            <p className="text-textColor text-[16px] leading-6 fond-medium">
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount