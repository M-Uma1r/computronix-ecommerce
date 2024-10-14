import React from 'react'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  return (
    <div className='Featured-container'>
        <p className='Product-Heading'>Featured Product</p>
        <div className="cards">
            <div className="card1">
                <img src="https://zahcomputers.pk/wp-content/uploads/2024/06/Palit-GameRock-GeForce-RTX%E2%84%A2-4090-24GB-GDDR6X-HDMI-2.1a-Graphics-Card-Lowest-Price-in-Pakistan.jpg.webp" alt="RTX4090" />
                <p className='description'>Palit GameRock GeForce RTX™ 4090 24GB GDDR6X HDMI 2.1a Graphics Card</p>
                <p className='Price'>$1949</p>
            </div>
        </div>

    </div>
  )
}
