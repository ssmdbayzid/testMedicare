const { apiSlice } = require("app/api/apiSlice");

export const userApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Users', ]}).injectEndpoints({    
    endpoints: builder =>({
        getUsers: builder.query({
            query: ()=> `users`,
            keepUnusedDataFor: 5,   
            providesTags: ["Users"]         
        }),
        getSingleUser: builder.query({
            query: (id)=> `users/${id}`  ,
            providesTags: ["Users"]
        }),
        updateUser: builder.mutation({
            query: ({id, ...rest})=>({
                url: `users/${id}`,
                method: `POST`,
                body: rest,            
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: (id)=>({
                url: `users/${id}`,
                method: `DELETE`,                
            }),
            invalidatesTags: ["Users"]
        })                
    })
})

export const {
    useGetUsersQuery,
useGetSingleUserQuery,
useUpdateUserMutation,
useDeleteUserMutation,
} = userApiSlice;