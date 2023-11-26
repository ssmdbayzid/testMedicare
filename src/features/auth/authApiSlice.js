const { apiSlice } = require("app/api/apiSlice");

export const  authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query:formData => ({ 
            url: 'auth/login',
            method: "POST",
            body: {...formData}
        })
        })
    })
})

export const {useLoginMutation} = authApiSlice;