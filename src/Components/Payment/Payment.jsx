import React, { useState } from 'react'
import "./Payment.css"

export default function Payment() {
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [Phone , setPhone] = useState()
    const [address , setAddress] = useState("")
    const [country , setCountry] = useState("")
    const [city , setCity] = useState("")

  return (
    <div className='payment-container'>
        <div className="payment-card">
            <p className='fw-bold payment-input'>First Name</p>
            <input className='mx-3' style={{height:"40px"}} type="text"  onChange={(e)=>{setFirstName(e.target.value)}}/>
            <p className='fw-bold payment-input'>Last Name</p>
            <input className='mx-3' style={{height:"40px"}} type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
            <p className='fw-bold payment-input'>Phone Number</p>
            <input className='mx-3' style={{height:"40px"}} type="number" onChange={(e)=>{setPhone(e.target.value)}}/>
            <p className='fw-bold payment-input'>Address</p>
            <input className='mx-3' style={{height:"40px"}} type="text"  onChange={(e)=>{setAddress(e.target.value)}}/>
            <p className='fw-bold payment-input'>Country</p>
            <input className='mx-3' style={{height:"40px"}} type="text"  onChange={(e)=>{setCountry(e.target.value)}}/>
            <p className='fw-bold payment-input'>City</p>
            <input className='mx-3' style={{height:"40px"}} type="text"  onChange={(e)=>{setCity(e.target.value)}}/>
            <button className='payment-button mx-3 mt-4'>Confirm Payment</button>
        </div>
    </div>
  )
}
