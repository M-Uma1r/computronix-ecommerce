import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'

export default function App() {
  return (
    <div className='AppContainer'>
      <div className='flex-items'>
        <div className="NavBar"  style={{order:1}}><Navbar /></div>
        <div style={{order:2}}><LandingPage /></div>
      </div>
    </div>
  )
}
