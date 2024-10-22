import React from "react";
import "./SmartPhones.css";

export default function SmartPhones() {
  return (
    <div className="Smartphones-container">
      <div className="heading">
        <p className="Product-Heading">SMARTPHONES</p>
      </div>
      <div className="cards">
        <div className="card3" style={{ order: 1 }}>
          <img
            className="mt-4"
            src="https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_TitaniumGray_Lockup_1600x1200.jpg?$product-details-jpg$"
            alt="Galaxy S24 Ultra"
            style={{ height: "160px", width: "220px", marginLeft: "25px" }}
          />
          <p className="description" style={{ marginTop: "80px" }}>
            Galaxy S24 Ultra
          </p>
          <p className="Price mt-4">$1,299.99</p>
        </div>
        <div className="card3" style={{ order: 2 }}>
          <img
            src="https://images.priceoye.pk/apple-iphone-16-pro-max-pakistan-priceoye-o2qpn-500x500.webp"
            alt="Apple iPhone 16 Pro Max"
          />
          <p className="description" style={{ marginTop: "20px" }}>
            Apple iPhone 16 Pro Max
          </p>
          <p className="Price mt-4">$1,199</p>
        </div>
        <div className="card3" style={{ order: 3 }}>
          <img
            style={{ height: "200px" ,width: "200px", marginLeft:"30px" }}
            src="https://lh3.googleusercontent.com/1Pdm3gR8T0BQUnlEaH_6sUp0UcyFWKhNopBphkXkqyblgGvws_WweuKHZiKLgm0FkV99DjCUw_3LLDgtREIC4iwoZRJgNPD20go=rw-e365-w3000"
            alt="Pixel 9 Pro XL"
          />
          <p className="description" style={{ marginTop: "70px" }}>
            Pixel 9 Pro XL
          </p>
          <p className="Price mt-4">$999</p>
        </div>
        <div className="card3" style={{ order: 4 }}>
          <img
            style={{ height: "200px" }}
            src="https://m.media-amazon.com/images/I/719QmmyMLYL._SX679_.jpg"
            alt="Alienware Aurora R16 Gaming Desktop"
          />
          <p className="description" style={{ marginTop: "70px" }}>
            Alienware Aurora R16 Gaming Desktop
          </p>
          <p className="Price mt-4">$1,407.45</p>
        </div>
      </div>
    </div>
  );
}
