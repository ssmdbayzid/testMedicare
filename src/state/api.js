import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'utils/config';

// Authirization Token
const getToken = () => {
    return localStorage.getItem('auth-token')
};



export const api = createApi({
    
    baseQuery: fetchBaseQuery({        
        baseUrl: BASE_URL,
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }),
    reducerPath: "medicareApi",
    tagTypes: ["User", "Doctors"],
    endpoints: (builder) => ({

        // Create User
        createUser: builder.mutation({
            query: (user)=> ({
                url: `auth/register`,
                method: 'POST',
                body: user,
                                
            }),
        }),
        // Login User
        loginUser: builder.mutation({
            query: (user)=> ({
                url: `auth/login`,
                method: 'POST',
                body: user,                                
            }),
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
            query: ({id, updateDoctor})=> ({
                url: `doctors/:${id}`,
                method: 'PUT',
                body: updateDoctor,
            })
        }),
        deleteDoctor: builder.mutation({
            query: (id)=> ({
                url: `doctors/:${id}`,
                method: 'DELETE',                
            })
        }),
        
        // Users CRUD Operation
        getUsers: builder.query({
            query:  ()=> 'users',
        }),
        getSingleUser: builder.query({
            query: (id)=> `users/${id}`,
            providesTags: ["User"]
        }),
        updateUser: builder.mutation({
            query: ({id, updateUser})=> ({
                url: `users/:${id}`,
                method: 'PUT',
                body: updateUser,
            })
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
            })            
        }),
        
        getAllReviews: builder.query({
            query: ()=> 'reviews'
        })
        
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

} = api;