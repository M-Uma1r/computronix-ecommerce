import React from "react";
import "./LandingPage.css";
import Options from "../Options/Options";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import DesktopSection from "../Desktopsection/DesktopSection";
import Laptops from "../LaptopSection/Laptops";
import SmartPhones from "../SmartPhones/SmartPhones";
import SmartWatch from "../Smartwatch/SmartWatch";
import Headphones from "../Headphones/Headphones";
import Keyboards from "../Keyboards/Keyboards";
import Mouse from "../Mouse/Mouse";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function LandingPage() {
    // State to control button visibility
    const [showScroll, setShowScroll] = useState(false);

    // Show button only when scrolled down 300px
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Scroll to the top of the page when button is clicked
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className="LandingPagecontainer">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src="https://www.czone.com.pk/images/banners/261.jpg"
              className="d-block w-100"
              alt="First slide"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://www.czone.com.pk/images/banners/274.jpg"
              className="d-block w-100"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.czone.com.pk/images/banners/277.jpg"
              className="d-block w-100"
              alt="Third slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="Options-container">
        <a href="#desktops" style={{color:"black"}}>
          <i class="fa-solid fa-desktop fa-2xl"></i>
        </a>
        <a href="#laptops" style={{color:"black"}}>
          <i class="fa-solid fa-laptop fa-2xl"></i>
        </a>
        <a href="#smartphones" style={{color:"black"}}>
          <i class="fa-solid fa-mobile fa-2xl"></i>
        </a>
        <a href="#smartwatch" style={{color:"black"}}>
          <i class="bi bi-smartwatch h2"></i>
        </a>
        <a href="#headphones" style={{color:"black"}}>
          <i class="fa-solid fa-headphones fa-2xl"></i>
        </a>
        <a href="#keyboards" style={{color:"black"}}>
          <i class="fa-regular fa-keyboard fa-2xl"></i>
        </a>
        <a href="#mouse" style={{color:"black"}}>
          <i class="fa-solid fa-computer-mouse fa-2xl"></i>
        </a>
      </div>
      {/* <div id="options"><Options /></div> */}
      <div id="featured-products"><FeaturedProducts /></div>
      <div id="desktops"><DesktopSection /></div>
      <div id="laptops"><Laptops /></div>
      <div id="smartphones"><SmartPhones /></div>
      <div id="smartwatch"><SmartWatch /></div>
      <div id="headphones"><Headphones /></div>
      <div id="keyboards"><Keyboards /></div>
      <div id="mouse"><Mouse /></div>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button onClick={scrollToTop} className="scroll-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}
