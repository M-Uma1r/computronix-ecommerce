import React from 'react'
import "./Headphones.css"

export default function Headphones() {
  return (
    <div className="Headphones-container">
    <div className="heading">
      <p className="Product-Heading">HEADPHONES</p>
    </div>
    <div className="cards">
      <div className="card3" style={{ order: 1 }}>
        <img
          className="mt-4"
          src="https://m.media-amazon.com/images/I/71c+YOxfTGL._AC_SX466_.jpg"
          alt="Logitech G PRO X 2 Lightspeed Wireless Gaming Headset" 
          style={{ height: "200px", width: "180px", marginLeft: "35px" }}
        />
        <p className="description" style={{ marginTop: "40px" }}>
          Logitech G PRO X 2 Lightspeed Wireless Gaming Headset
        </p>
        <p className="Price mt-4">$249.99</p>
      </div>
      <div className="card3" style={{ order: 2 }}>
        <img style={{height:"250px" ,width:"200px",marginLeft:"30px"}}
          src="https://m.media-amazon.com/images/I/61Ljoua9pjL._AC_SX466_.jpg"
          alt="SteelSeries Arctis Nova 7P Wireless Multi-Platform Gaming Headset"
        />
        <p className="description" style={{ marginTop: "20px" }}>
          SteelSeries Arctis Nova 7P Wireless Multi-Platform Gaming Headset
        </p>
        <p className="Price mt-4">$110.10</p>
      </div>
      <div className="card3" style={{ order: 3 }}>
        <img
          style={{ height: "250px" ,width: "280px",marginLeft:"-5px" }}
          src="https://m.media-amazon.com/images/I/81bQEkMevBL._AC_SX466_.jpg"
          alt="Logitech G435 LIGHTSPEED Wireless Bluetooth Gaming Headset"
        />
        <p className="description" style={{ marginTop: "20px" }}>
          Logitech G435 LIGHTSPEED Wireless Bluetooth Gaming Headset
        </p>
        <p className="Price mt-4">$47.99</p>
      </div>
      <div className="card3" style={{ order: 4 }}>
        <img
          style={{ height: "220px",width:"200px",marginLeft:"35px" }}
          src="https://m.media-amazon.com/images/I/61vIICn1JOL._AC_SX466_.jpg"
          alt="Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones"
        />
        <p className="description" style={{ marginTop: "50px" }}>
          Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones
        </p>
        <p className="Price">$298</p>
      </div>
    </div>
  </div>
  )
}
