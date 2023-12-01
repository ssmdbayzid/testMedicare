const { apiSlice } = require("app/api/apiSlice");

export const doctorApiSlice = apiSlice.enhanceEndpoints({addTagTypes: ['Doctors']}).injectEndpoints({
    endpoints: builder => ({
        getDoctors: builder.query({
            query: () => 'doctors',
            providesTags: ["Doctors"]
        }),
        getSingleDoctor: builder.query({
            query: (id)=>`doctors/${id}`,
            providesTags: ["Doctors"]
        }),
        updateDoctor: builder.mutation({
            query: ({id, ...rest})=>({
                url: `doctors/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["Doctors"],
        }),
        deleteDoctor: builder.mutation({
            query: (id)=>({
                url: `doctors/${id}`,
                method: "DELETE",                
            }),
            invalidatesTags: ['Doctors'],
        }),
        postReview: builder.mutation({
            query: ({id, ...rest})=> ({
            url: `doctors/${id}/reviews`,
            method: "POST",
            body: rest,
            }),
            invalidatesTags: ["Doctors"]
        })
    })
})

export const {
useGetDoctorsQuery,
useGetSingleDoctorQuery,
useUpdateDoctorMutation,
useDeleteDoctorMutation,
usePostReviewMutation
} = doctorApiSlice