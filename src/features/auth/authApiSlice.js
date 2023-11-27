const { apiSlice } = require("app/api/apiSlice");

export const  authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query:credential => ({ 
            url: 'auth/login',
            method: "POST",
            body: credential
        })
        }),
        createUser: builder.mutation({
            query: credential => ({ 
            url: 'auth/register',
            method: "POST",
            body: credential
        })
        })
    })
})

export const {
    useLoginMutation,
    useCreateUserMutation
} = authApiSlice;