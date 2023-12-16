import moment from 'moment'

import { Link, useParams } from 'react-router-dom'
import { useBookingMutation } from 'features/booking/bookingApiSlice';
import { ClimbingBoxLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
// import CheckoutForm from 'Pages/Payment/CheckOutForm';

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BASE_URL } from 'utils/config';
import CheckOutForm from 'Pages/Booking/CheckOutForm';
const stripePromise = loadStripe("pk_test_51ODQzkSE1wNzm1KdE9pfkilRgrdvFkX1O1pJPHAdGMUWo3JQrRLsL3UBfG7vOZvgfD4Io0YM10UYqqwX3o8H7SiD00XUjWPGqO");


const SidePanel = ({doctor}) => {
  const [booking] = useBookingMutation()

  const user = useSelector(selectCurrentUser)
  const {id} = useParams()

  const [clientSecret, setClientSecret] = useState("");

  console.log(process.env.REACT_APP_STRIPE_SECRET_KEY)
  
  useEffect(() => {




    // Create PaymentIntent as soon as the page loads
    fetch(`${BASE_URL}/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        console.log(data.clientSecret)
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </div>
  );
}

export default SidePanel



/* <div className="px-8 md:w-96 w-full md:p-5 rounded-md shadow-xl border border-solid py-14">
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
    </div>*/