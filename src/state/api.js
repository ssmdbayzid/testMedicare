import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getRefreshToken } from 'hooks/useGetRefreshToken';
import { BASE_URL } from 'utils/config';


// Authirization Token

const accessToken = localStorage("access-token")

const extendedFetchBaseQuery = async (args, api, extraOptions, BASE_URL) =>{
const url = `${BASE_URL}${args.url}`

    const headers = {
        ...extraOptions.headers,
        Authorization: `Bearer ${accessToken}`
    }
    try {

        return await fetchBaseQuery({...args, url, headers}, api, extraOptions);
    } catch (error) {
        if(error.status === 401){
            const newToken = getRefreshToken()
            token = newToken
            
            return await fetchBaseQuery({...args, url}, api, extraOptions)
        }
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