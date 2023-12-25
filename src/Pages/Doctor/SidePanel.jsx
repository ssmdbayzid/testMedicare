import moment from 'moment'

import { Link, useParams } from 'react-router-dom'
import { useBookingMutation } from 'features/booking/bookingApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
// import CheckoutForm from 'Pages/Payment/CheckOutForm';

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_URL } from 'utils/config';
import { toast } from 'react-toastify';
import { configure } from '@testing-library/react';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51ODQzkSE1wNzm1KdE9pfkilRgrdvFkX1O1pJPHAdGMUWo3JQrRLsL3UBfG7vOZvgfD4Io0YM10UYqqwX3o8H7SiD00XUjWPGqO");


const SidePanel = ({doctor}) => {
  const [booking] = useBookingMutation()

  const user = useSelector(selectCurrentUser)
  const {id} = useParams()


  console.log(doctor?.availableTime[0]?.startingTime)
  const makePayment  = async (e) =>{
      e.preventDefault()
      
     /* axios.post('http://localhost:5000/api/v1/book-appointment', {
        id,
        doctorId: doctor._id,
        userId: user._id,
        date: '2023-12-23',
        time: "14:00",
        ticketPrice: doctor.ticketPrice,
      })
      .then(res => {
        console.log(res);
        if(res.data.url){
          window.location.href = res.data.url
        }
      })
      .catch(error=> {
        console.log(error);
      });
      */
           
      
      const form = e.target;      
      const selectedDate = new Date(form.date.value);
      const currentDate = new Date();             

      const selectedTime = form.bookingTime.value
      const startingTime = doctor?.availableTime[0]?.startingTime;
      const endingTime = doctor?.availableTime[0]?.endingTime;


      
      
      // Extract year, month, and day from both dates
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based (0-11)
      var currentDay = currentDate.getDate();
      
      var selectedYear = selectedDate.getFullYear();
      var selectedMonth = selectedDate.getMonth() + 1;
      var selectedDay = selectedDate.getDate();

      if(currentYear <= selectedYear && currentMonth <= selectedMonth && currentDay <= selectedDay){      
        if(startingTime <= selectedTime && endingTime >= selectedTime){
          axios.post('http://localhost:5000/api/v1/book-appointment', {
        id,
        doctorId: doctor._id,
        userId: user._id,
        date: form.date.value,
        time: form.bookingTime.value,        
      })
      .then(res => {
        console.log(res);
        if(res.data.url){
          window.location.href = res.data.url
        }
      })
      .catch(error=> {
        console.log(error);
      });
      
        }
        else{
          toast.error("select avl time")
        }

      } else {
        toast.error("Select date from today")
      } 
      
      
    }

  return (
    <div className="px-8 md:w-96 w-full md:p-5 rounded-md shadow-xl border border-solid py-14">
      <form onSubmit={makePayment}>
      <h1 className="text-3xl font-extrabold text-center text-[var(--heading-color)] mb-3">Book Appointment</h1>
      <hr className="bg-[var(--primary-color)] w-12 h-1 mx-auto mb-3"/>
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor?.specialization} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor?.name} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={user.name} />
      <input type="date" name='date' className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" placeholder="Appointment Date" />
      <input type="time" name='bookingTime' className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-1" placeholder="Appointment Time" />
      <p className="text-center text-sm mb-2 text-[var(--primary-color)]">Available from <span className="text-red-600 font-bold">{moment(doctor?.availableTime[0]?.startingTime, "HH:mm").format("hh:mm A")}</span> to  <span className="text-red-600 font-bold">{moment(doctor?.availableTime[0]?.endingTime, "HH:mm").format("hh:mm A")}</span> </p> 
       <button           
      className="bg-[var(--primary-color)] text-white rounded-full text-center w-full py-3 px-3 font-semibold text-[24px] md:text-lg cursor-pointer">Book Appointment</button> 
      </form>     
    </div>
  );
}

export default SidePanel



/* 
<div className="px-8 md:w-96 w-full md:p-5 rounded-md shadow-xl border border-solid py-14">
      <form >
      <h1 className="text-3xl font-extrabold text-center text-[var(--heading-color)] mb-3">Book Appointment</h1>
      <hr className="bg-[var(--primary-color)] w-12 h-1 mx-auto mb-3"/>
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor?.specialization} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" value={doctor?.name} />
      <input type="text" className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" placeholder="Patient Name" />
      <input type="date" name='date' className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-3" placeholder="Appointment Date" />
      <input type="time" name='bookingTime' className="w-full px-4 py-3 border text-lg first-letter:uppercase rounded-full mb-1" placeholder="Appointment Time" />
      <p className="text-center text-sm mb-2 text-[var(--primary-color)]">Available from <span className="text-red-600 font-bold">{moment(doctor?.availableTime[0]?.startingTime, "HH:mm").format("hh:mm A")}</span> to  <span className="text-red-600 font-bold">{moment(doctor?.availableTime[0]?.endingTime, "HH:mm").format("hh:mm A")}</span> </p> 
      {/* <button     
      
      className="bg-[var(--primary-color)] text-white rounded-full text-center w-full py-3 px-3 font-semibold text-[24px] md:text-lg cursor-pointer">Book Appointment</button> 
      </form>
      <button     
      // onClick={()=>makePayment()}
      className="bg-[var(--primary-color)] text-white rounded-full text-center w-full py-3 px-3 font-semibold text-[24px] md:text-lg cursor-pointer">Book Appointment</button>
    </div>
    */