const { apiSlice } = require("app/api/apiSlice");

export const userApiSlice = apiSlice.injectEndpoints({    
    endpoints: builder =>({
        getUsers: builder.query({
            query: ()=> `users`,
            keepUnusedDataFor: 5,            
        }),
        getSingleUser: builder.query({
            query: (id)=> `users/${id}`            
        }),
        updateUser: builder.mutation({
            query: ({id, ...rest})=>({
                url: `users/${id}`,
                method: `POST`,
                body: rest,            
            })
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `users/${id}`,
                method: `DELETE`,                
            })
        })                
    })
})

export const {
    useGetUsersQuery,
useGetSingleUserQuery,
useUpdateUserMutation,
useDeleteUserMutation,
} = userApiSlice;