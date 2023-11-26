import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { logOut, setCredentials } from 'features/auth/authSlice';
import { getRefreshToken } from 'hooks/useGetRefreshToken';

import { BASE_URL } from 'utils/config';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, {getState})=>{
        // const token = localStorage.getItem("accessToken")
        const token = getState().auth.token
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers;
    },
})
const baseQueryWithReauth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatue === 401){
        console.log("Sending refresh token")
        // send Refresh token to get new access token
        const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data){
            const user = api.getState().auth.user;
            console.log(refreshResult?.data , "this is under refresh token get function")
            // store the new token

            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        }
        else{
            api.dispatch(logOut())
        }
        return result
    }
}

export  const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
