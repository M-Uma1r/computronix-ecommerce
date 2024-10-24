import React from 'react'
import "./Mouse.css"

export default function Mouse() {
  return (
    <div className="Mouse-container">
    <div className="heading">
      <p className="Product-Heading">MOUSE</p>
      
    </div>
    <div className="cards">
      <div className="card3" style={{ order: 1 }}>
        <img
          className="mt-4"
          src="https://m.media-amazon.com/images/I/61BJ2MpgTTL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          alt="Razer Viper V3 Pro Wireless Gaming Mouse"
          style={{ height: "200px" , width: "130px" , marginLeft:"70px" }}
        />
        <p className="description" style={{marginTop:"40px"}} >
            Razer Viper V3 Pro Wireless Gaming Mouse
        </p>
        <p className="Price mt-4">$159.99</p>
      </div>
      <div className="card3" style={{ order: 2 }}>
        <img style={{height:"200px" , width:"150px",marginLeft:"60px",marginTop:"30px"}}
          src="https://m.media-amazon.com/images/I/51DYDLykzoL._AC_SX466_.jpg"
          alt="Logitech G305 LIGHTSPEED Wireless Gaming Mouse"/>
        <p className="description" style={{marginTop:"40px"}}>
          Logitech G305 LIGHTSPEED Wireless Gaming Mouse
        </p>
        <p className="Price mt-4">$49.99</p>
      </div>
      <div className="card3" style={{ order: 3 }}>
        <img style={{height:"200px" ,width:"130px",marginLeft:"60px",marginTop:"20px"}}
          src="https://m.media-amazon.com/images/I/718b9wK3eaL._AC_SX466_.jpg"
          alt="Logitech G502 Lightspeed Wireless Gaming Mouse"
        />
        <p className="description" style={{marginTop:"50px"}}>
            Logitech G502 Lightspeed Wireless Gaming Mouse
        </p>
        <p className="Price mt-4">$69.99</p>
      </div>
      <div className="card3" style={{ order: 4 }}>
        <img style={{height:"250px",width:"250px",}}
          src="https://www.tejar.pk/media/catalog/product/cache/3/image/500x/9df78eab33525d08d6e5fb8d27136e95/l/o/logitech_pro_x_superlight_2_wireless_gaming_mouse-1_-_tejar_1.jpg"
          alt="Logitech G PRO X SUPERLIGHT 2 LIGHTSPEED Wireless Gaming Mouse"
        />
        <p className="description" style={{marginTop:"20px"}}>Logitech G PRO X SUPERLIGHT 2 LIGHTSPEED Wireless Gaming Mouse</p>
        <p className="Price mt-4">$159.99</p>
      </div>
    </div>
  </div>
  )
}
