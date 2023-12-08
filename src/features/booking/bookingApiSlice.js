const { apiSlice } = require("app/api/apiSlice");

const bookingApiSlice = apiSlice.enhanceEndpoints({addTags: ['booking', "Users", "Doctors"]}).injectEndpoints({
    endpoints: builder =>({
        booking: builder.mutation({
            query: ({doctorId, ...rest})=> ({
                url: 'booking',
                method: "POST",
                body: rest,
            })
        })
    })
})

export const {useBookingMutation} = bookingApiSlice;