import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
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
        if(refresh?.data){
            const user = api.getState().auth.user;
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


// ================= ============= ===========

const extendedFetchBaseQuery = async (args, api, extraOptions, prepareHeaders: (headers)=>{
    const token = localStorage.getItem("accessToken")
    if(token){
        headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
},
baseUrl: "http://localhost:5000/api/v1", ) =>{
    
    try {
        return await fetchBaseQuery({
            args,
            api, 
            prepareHeaders: (headers)=>{
            const token = localStorage.getItem("accessToken")
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        },
        baseUrl: "http://localhost:5000/api/v1",
        extraOptions,});
    } catch (error) {
        if(error.status === 401){
            try {
                const newAccessToken = getRefreshToken()
                localStorage.setItem('access-token', newAccessToken);                                  
                return await fetchBaseQuery({
                    args,
                    api,
                    baseUrl: "http://localhost:5000/api/v1", 
                    prepareHeaders: (headers)=>{
                    const token = localStorage.getItem("accessToken")
                    if(token){
                        headers.set("Authorization", `Bearer ${token}`)
                    }
                return headers;

                },
                extraOptions});
            } catch (error) {
                console.log(error)
                throw error
            }
           
        }
        console.log(error)
        throw error
    }
}
export const api = createApi({
    
    baseQuery: extendedFetchBaseQuery,
    reducerPath: "medicareApi",
    tagTypes: ["User", "Doctors", "Reviews"],
    endpoints: (builder) => ({

        // Create User
        createUser: builder.mutation({
            query: (user)=> ({
                url: `auth/register`,
                method: 'POST',
                body: user,                                
            }),
            providesTags: ["User"]
        }),
        // Login User
        loginUser: builder.mutation({
            query: (user)=> ({
                url: `auth/login`,
                method: 'POST',
                body: user,                                
            }),
            providesTags: ["User"]
        }),        
        // Doctors CRUD Operation
        getDoctors: builder.query({
            query:  ()=> 'doctors',
        }),
        getSingleDoctor: builder.query({
            query: (id)=> `doctors/${id}`,
            providesTags: ["Doctors"]
        }),
        updateDoctor: builder.mutation({
            query: ({id, ...rest})=> ({
                url: `doctors/${id}`,
                method: 'PUT',
                body: rest,
            }),
            
            invalidatesTags: ["Doctors"]
        }),
        deleteDoctor: builder.mutation({
            query: (id)=> ({
                url: `doctors/:${id}`,
                method: 'DELETE',
                invalidatesTags: ["Doctors"]                
            })
        }),
        
        // Users CRUD Operation
        getUsers: builder.query({
            query:  ()=> 'users',
            providesTags: ["User"],
        }),
        getSingleUser: builder.query({
            query: (id)=> `users/${id}`,
            providesTags: ["User"]
        }),
        updateUser: builder.mutation({
            query: ({id, ...rest})=> ({
                url: `users/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ["User"]
        }),
        deleteUser: builder.mutation({
            query: (id)=> ({
                url: `users/:${id}`,
                method: 'DELETE',                
            })
        }),

        // review post & read operation
        postReview: builder.mutation({
            query: ({id, feedback})=>  ({
                url: `doctors/${id}/reviews`,
                method: 'POST',
                body: feedback,
            }),
            invalidatesTags: ["Doctors"]            
        }),
        
        getAllReviews: builder.query({
            query: ()=> 'reviews',
            providesTags: ["Doctors"]
        }),

        // payment checkout
        paymentCheckOut: builder.mutation({
            query: (data)=> ({
                url: `booking`,
                method: 'POST',
                body: data,                                
            }),
            providesTags: ["Doctor", "User"]
        }),      
        
    })
})

export const {
    useGetDoctorsQuery,
    useGetSingleDoctorQuery,
    useUpdateDoctorMutation,
    useDeleteDoctorMutation,
    useUpdateUserMutation,
    useGetUsersQuery,
    useGetSingleUserQuery,
    
    useGetAllReviewsQuery,
    usePostReviewMutation,
    useCreateUserMutation,
    useLoginUserMutation,
    useDeleteUserMutation,
    usePaymentCheckOutMutation,
} = api;