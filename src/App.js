import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Desktopcard1 from './Components/Desktopsection/Desktopcard1'
import Desktopcard2 from './Components/Desktopsection/Desktopcard2'
import Desktopcard3 from './Components/Desktopsection/Desktopcard3'
import Payment from './Components/Payment/Payment'

export default function App() {
  return (
    <div className='AppContainer'>
      <div className='flex-items'>
        <div className="NavBar"  style={{order:1}}><Navbar /></div>
        {/* <div style={{order:2}}><LandingPage /></div> */}
        {/* <Desktopcard1/> */}
        {/* <Desktopcard2/> */}
        {/* <Desktopcard3/> */}
        <Payment/>
      </div>
    </div>
  )
}
