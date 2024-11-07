import React from 'react'
import { useState } from "react";
import "./Desktopcard1.css";

export default function Desktopcard3() {
  const [count, setCount] = useState(1);
  const [price,setPrice] = useState(829)
  const [finalPrice, setFinalPrice] = useState(count * price);


  function inc() {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      setFinalPrice(newCount * price);
      return newCount;
    });
  }
  
  function dec() {
    setCount(prevCount => {
      const newCount = prevCount > 1 ? prevCount - 1 : 1;
      setFinalPrice(newCount * price);
      return newCount;
    });
  }
  

  return (
    <div className="Desktopcard1-container">
      <div className="product d-inline-flex">
        <div className="left-section" style={{ order: 1 }}>
          <img
            style={{
              height: "450px",
              width: "450px",
              margin: "40px",
              marginLeft: "80px"
            }}
            src="https://www.datocms-assets.com/34299/1727324328-player-1-ww-09-04-24-hero-black-badge.png?ixlib=js-3.8.0&w=500&h=500&dpr=1&q=75"
            alt=""
          />
        </div>
        <div
          className="right-section"
          style={{
            order: 2,
            display: "flex",
            flexDirection: "column",
            width: "800px",
            marginTop: "40px",
          }}
        >
          <div
            className="card1-title mt-2 mx-3 h3"
            style={{height: "70px", order: 1 }}
          > NZXT Player: One -H5 Flow Gaming PC with RTX 3050 or RTX 4060
            GPU
          </div>
          <div
            className="card1-description mx-3"
            style={{ order: 2,fontSize: "100" }}
          >
            <li style={{ listStyleType: "none" }}>
              <p className="fw-bold d-inline">Product Code:</p>
              <p className="d-inline"> -</p>
            </li>
            <li style={{ listStyleType: "none" }}>
              <p className="fw-bold d-inline">Brand:</p>
              <p className="d-inline"> NZXT</p>
            </li>
            <li style={{ listStyleType: "none" }}>
              <p className="fw-bold d-inline">Price Updated on: </p>
              <p className="d-inline">22 Sep,2024</p>
            </li>
            <li style={{ listStyleType: "none" }}>
              <p className="fw-bold d-inline">Description: </p>
              <p className="d-inline">
                 The NZXT Player: One - H5 Flow Gaming PC offers a high-performance gaming experience with options for either the RTX 3050 or RTX 4060 GPU, providing impressive graphics and smooth gameplay. Designed for optimal airflow with the H5 Flow case, this PC keeps components cool during intense sessions. Ideal for both gaming and multitasking, it’s a reliable and stylish choice for gamers looking for power, versatility, and future-proofing at an accessible price.
              </p>
            </li>
            <li className="mt-2 mx-3 fw-bolder" style={{listStyleType:"none",color:"rgb(0, 179, 255)",fontSize:"1.1rem"}}>${finalPrice.toFixed(2)}</li>
            <div className="counter mt-3 mx-3">
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
                onClick={dec}
              >
                -
              </button>
              <div
                className="counting d-inline-block mx-1"
                style={{
                  border: "2px solid black",
                  width: "40px",
                  textAlign: "center",
                }}
              >
                {count}
              </div>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
                onClick={inc}
              >
                +
              </button>
            </div>
            <li className="mt-2 mx-3" style={{ listStyleType: "none" }}>
              <button className="add-to-cart" style={{}}>
                Add to cart
              </button>
            </li>
          </div>
        </div>
      </div>
      <div
        className="smilar-product mt-4 mx-3"
        style={{
          width: "97vw",
        }}
      >
        <div className="Desktop-container">
          <div className="heading">
            <p className="Product-Heading">SIMILAR PRODUCTS</p>
          </div>
          <div className="cards justify-content-around">
            <div className="card3" style={{ order: 4 }}>
              <img
                src="https://www.czone.com.pk/images/thumbnails-large/copy-copy-copy-38-czone.com.pk-1540-15889-020524100012.jpg"
                alt="MSI Codex R2 Gaming Desktop: Intel Core i5-14400F, Geforce RTX 4060 Ti, 16GB DDR5, 1TB m.2 NVMe SSD, 80+ Gold PSU, WiFi, Keyboard & Mouse, DIY Friendly, Windows 11 Home: A14NUD5-213US"
                
              />
              <p className="description">
                Apple iMac 24" | Apple M3 8-Core CPU, 24GB, 2TB SSD, 10-Core GPU |
                Silver
              </p>
              <p className="Price mt-4">$1699</p>
            </div>
            <div className="card3" style={{ order: 4 }}>
              <img
                src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6580/6580517_sd.jpg;maxHeight=640;maxWidth=550;format=webp"
                alt="MSI - Codex R2 Gaming Desktop - Intel Core i5-14400F - 16GB Memory - NVIDIA GeForce RTX 4060 - 1TB SSD - Black"
              />
              <p className="description">
                 MSI - Codex R2 Gaming Desktop - Intel Core i5-14400F - 16GB
                 Memory - NVIDIA GeForce RTX 4060 - 1TB SSD - Black
              </p>
              <p className="Price mt-4">$899.99</p>
            </div>
            <div className="card3" style={{ order: 4 }}>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/pdp/testing/desktop-aw-r16-bk-lqd-cooling-gallery-1-test.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=271&qlt=100,1&resMode=sharp2&size=271,402&chrss=full"
                alt="Alienware Aurora R16 Gaming Desktop"
              />
              <p className="description">Alienware Aurora R16 Gaming Desktop</p>
              <p className="Price mt-4">$1,249.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
