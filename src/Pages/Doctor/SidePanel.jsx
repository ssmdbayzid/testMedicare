import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import { usePaymentCheckOutMutation } from 'state/api';

const SidePanel = ({doctor}) => {
  const [paymentCheckOut] = usePaymentCheckOutMutation()

  const makePayment = async ()=>{    
    const stripe = await loadStripe("pk_test_51ODQzkSE1wNzm1KdE9pfkilRgrdvFkX1O1pJPHAdGMUWo3JQrRLsL3UBfG7vOZvgfD4Io0YM10UYqqwX3o8H7SiD00XUjWPGqO")
    const response = paymentCheckOut(doctor)
    if(response.data){
      console.log(response.data)
      const result = stripe.redirectToCheckout({
        sessionId:response.id
      })
      if(result.error){
        console.log("this erro payment page", result.error)
      }
    }
    if(response.error){
      console.log(response.error)
    }
  }

  const bookAppointment =(e) =>{
    e.preventDefault()
    const form = e.target;
    if((form.bookingTime.value < doctor.timeSlots[0].startingTime)||form.bookingTime.value > doctor.timeSlots[0].endingTime){
      alert("Please book available time")
    }else{
      console.log(e.target.bookingTime.value)
    }
  }
  console.log(doctor)

  return (
    <div className="px-8 md:w-96 w-full md:p-5 rounded-md shadow-xl border border-solid py-14">
      <form onSubmit={bookAppointment}>
      <h1 className="text-3xl font-extrabold text-center text-[var(--heading-color)] mb-3">Book Appointment</h1>
      <hr className="bg-[var(--primary-color)] w-12 h-1 mx-auto mb-3"/>
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor.specialization} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor.name} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" placeholder="Patient Name" />
      <input type="date" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" placeholder="Appointment Date" />
      <input type="time" name='bookingTime' className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-1" placeholder="Appointment Time" />
      <p className="text-center text-sm mb-2 text-[var(--primary-color)]">Available from <span className="text-red-600 font-bold">{moment(doctor.timeSlots[0].startingTime, "HH:mm").format("hh:mm A")}</span> to  <span className="text-red-600 font-bold">{moment(doctor.timeSlots[0].endingTime, "HH:mm").format("hh:mm A")}</span> </p> 
      <button
      onClick={makePayment}
      className="bg-[var(--primary-color)] text-white rounded-full text-center w-full py-3 px-3 font-semibold text-[24px] md:text-lg cursor-pointer">Book Appointment</button>
      </form>
    </div>
    
  )
}

export default SidePanel

/* <div className="p-4 md:p-5 rounded-md shadow-xl border border-solid">
      <div className="flex justify-between items-center mb-3">
        <p className=" font-semibold text-[15px]">Ticket Price</p>
        <p className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-bold">{doctor?.ticketPrice} BDT</p>
      </div>
      <p className="text-[16px] lg:text-[18px] font-semibold">Available Time Slots :</p>    
     {
      doctor && doctor.timeSlots.map((slot, index)=>
      <div key={index} className="flex justify-between items-center text-[14px] lg:text-[16px] mt-5">
      <p className="first-letter:capitalize">{slot.day}</p>
      <p> {moment(slot.startingTime, "HH:mm").format("hh:mm A")} - {moment(slot.endingTime, "HH:mm").format("hh:mm A")} </p>
    </div>)}      
       <Link to={`/doctor/${doctor._id}/bookAppointment`} className="btn rounded-md text-center px-3 text-[15px] md:text-lg cursor-pointer">Book Appointment</Link> 
      <button
      onClick={makePayment}
      className="btn rounded-md text-center px-3 text-[15px] md:text-lg cursor-pointer">Book Appointment</button>
    </div>
    */