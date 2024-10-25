import React from 'react'
import './Options.css'
import { Routes, Route, Link } from "react-router-dom";

export default function Options() {
  return (
    <div className='Options-container'>
        <Link to="Desktops">
          <i class="fa-solid fa-desktop fa-2xl"></i>
        </Link>
        <i class="fa-solid fa-laptop fa-2xl"></i>
        <i class="fa-solid fa-mobile fa-2xl"></i>
        <i class="bi bi-smartwatch h2"></i>
        <i class="fa-solid fa-headphones fa-2xl"></i>
        <i class="fa-regular fa-keyboard fa-2xl"></i>
        <i class="fa-solid fa-computer-mouse fa-2xl"></i>
    </div>
  )
}
