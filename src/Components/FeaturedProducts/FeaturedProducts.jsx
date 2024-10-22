import React from 'react'
import './FeaturedProducts.css'

export default function FeaturedProducts() {
  return (
    <div className='Featured-container'>
        <div className="heading">
            <p className='Product-Heading'>FEATURED PRODUCTS</p>
            
        </div>
        <div className="cards">
            <div className="card1" style={{order:1}}>
                <img src="https://zahcomputers.pk/wp-content/uploads/2024/06/Palit-GameRock-GeForce-RTX%E2%84%A2-4090-24GB-GDDR6X-HDMI-2.1a-Graphics-Card-Lowest-Price-in-Pakistan.jpg.webp" alt="RTX4090" />
                <p className='description'>Palit GameRock GeForce RTX™ 4090 24GB GDDR6X HDMI 2.1a Graphics Card</p>
                <p className='Price'>$1,949</p>
            </div>
            <div className="card2" style={{order:2}} >
                <img src="https://www.adorama.com/images/XLarge/HX4P5L1AAABL.jpg" alt="RTX4090" />
                <p className='description'>HyperX Cloud Alpha Wired Gaming Headset, Black/Red</p>
                <p className='Price'>$94.99</p>
            </div>
            <div className="card2" style={{order:3}} >
                <img src="https://image.benq.com/is/image/benqco/01-fk2-fk-black-top?$ResponsivePreset$&fmt=png-alpha" alt="RTX4090" />
                <p className='description'>ZOWIE FK2-B Mouse for Esports</p>
                <p className='Price mt-4'>$140</p>
            </div>
            <div className="card2" style={{order:4}} >
                <img src="https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cgravity=auto%2Cheight=1024%2Cq=85%2Cwidth=1024/wp-content/uploads/wooting-60-he-1.png" alt="RTX4090" />
                <p className='description'>Wooting 60HE+</p>
                <p className='Price mt-4'>$190</p>
            </div>
        </div>

    </div>
  )
}
