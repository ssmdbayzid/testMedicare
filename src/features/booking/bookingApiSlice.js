const { apiSlice } = require("app/api/apiSlice");

const bookingApiSlice = apiSlice.enhanceEndpoints({addTags: ['Booking', "Users", "Doctors"]}).injectEndpoints({
    endpoints: builder =>({
        booking: builder.mutation({
            query: ({doctorId, ...rest})=> ({
                url: 'Booking',
                method: "POST",
                body: rest,
            })
        })
    })
})

export const {useBookingMutation} = bookingApiSlice;