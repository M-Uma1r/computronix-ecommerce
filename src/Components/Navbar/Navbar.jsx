import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='container'>
        <p>Computronix</p>
        <button className='Login-btn'>Log In</button>
        <button className='Signup-btn'>Sign Up</button>
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
    </div>
  )
}
