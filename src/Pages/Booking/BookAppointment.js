import React from 'react'
import { useParams } from 'react-router-dom'

const BookAppointment = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>BookAppointment</div>
  )
}

export default BookAppointment