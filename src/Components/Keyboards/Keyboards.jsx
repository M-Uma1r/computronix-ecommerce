import React from 'react'
import "./Keyboards.css"

export default function Keyboards() {
  return (
    <div className="Keyboards-container">
    <div className="heading">
      <p className="Product-Heading">KEYBOARDS</p>
    </div>
    <div className="cards">
      <div className="card3" style={{ order: 1 }}>
        <img
          className="mt-4"
          src="https://dlcdnwebimgs.asus.com/gain/9E1FA5D0-65AB-4188-84DE-A80058422939/w717/h525"
          alt="ROG Strix Scope II 96 Wireless" 
          style={{ height: "200px", width: "250px", marginLeft: "15px" }}
        />
        <p className="description" style={{ marginTop: "50px" }}>
          ROG Strix Scope II 96 Wireless
        </p>
        <p className="Price mt-4">$179.99</p>
      </div>
      <div className="card3" style={{ order: 2 }}>
        <img style={{height:"220px" ,width:"298px",marginLeft:"-10px"}}
          src="https://m.media-amazon.com/images/I/71OLCx3BolL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          alt="Mountain Everest 60 RGB Gaming Keyboard"
        />
        <p className="description" style={{ marginTop: "50px" }}>
          Mountain Everest 60 RGB Gaming Keyboard
        </p>
        <p className="Price mt-4">$49.99</p>
      </div>
      <div className="card3" style={{ order: 3 }}>
        <img
          style={{ height: "120px" ,width: "280px",marginLeft:"0px",marginTop:"50px" }}
          src="https://m.media-amazon.com/images/I/71AwtccUQ2L._AC_SX466_.jpg"
          alt="Ducky Zero 6108 Mechanical Keyboard"
        />
        <p className="description" style={{ marginTop: "100px" }}>
          Ducky Zero 6108 Mechanical Keyboard
        </p>
        <p className="Price mt-4">$93.99</p>
      </div>
      <div className="card3" style={{ order: 4 }}>
        <img
          style={{ height: "120px",width:"200px",marginLeft:"35px",marginTop:"40px" }}
          src="https://m.media-amazon.com/images/I/71NFUiC1XaL._AC_SX466_.jpg"
          alt="SteelSeries Apex Pro TKL HyperMagnetic Gaming Keyboard"
        />
        <p className="description" style={{ marginTop: "110px" }}>
          SteelSeries Apex Pro TKL HyperMagnetic Gaming Keyboard
        </p>
        <p className="Price mt-4">$189.99</p>
      </div>
    </div>
  </div>
  )
}
