import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Authirization Token
const getToken = () => {
    return localStorage.getItem('auth-token')
};


export const api = createApi({
    baseQuery: fetchBaseQuery({        
        baseUrl: process.env.REACT_APP_BASE_URL,
        headers: {
            Authorization: `Bearer  ${getToken()}`
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
    
    useCreateUserMutation,
    useDeleteUserMutation,

} = api;