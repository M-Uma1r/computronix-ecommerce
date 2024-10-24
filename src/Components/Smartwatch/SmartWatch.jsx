import React from 'react'
import './SmartWatch.css'

export default function SmartWatch() {
  return (
    <div className="SmartWatch-container">
      <div className="heading">
        <p className="Product-Heading">SMARTWATCHES</p>
      </div>
      <div className="cards">
        <div className="card3" style={{ order: 1 }}>
          <img
            className="mt-4"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXKF3ref_VW_34FR+watch-case-49-titanium-black-ultra2_VW_34FR+watch-face-49-milanese-ultra2_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1724300640751"
            alt="Black Titanium Case with Titanium Milanese Loop" 
            style={{ height: "160px", width: "220px", marginLeft: "25px" }}
          />
          <p className="description" style={{ marginTop: "80px" }}>
            Black Titanium Case with Titanium Milanese Loop
          </p>
          <p className="Price mt-4">$899</p>
        </div>
        <div className="card3" style={{ order: 2 }}>
          <img style={{height:"200px" ,width:"298px",marginLeft:"-10px"}}
            src="https://www.apple.com/v/apple-watch-series-10/b/images/overview/media-card/highlights_design_endframe__ddite4lrqtkm_xlarge.jpg"
            alt="Apple iPhone 16 Pro Max"
          />
          <p className="description" style={{ marginTop: "70px" }}>
            Apple iPhone 16 Pro Max
          </p>
          <p className="Price mt-4">$1,199</p>
        </div>
        <div className="card3" style={{ order: 3 }}>
          <img
            style={{ height: "200px" ,width: "298px",marginLeft:"-10px" }}
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/LineUp.width-1000.format-webp.webp"
            alt="pixel watch 3"
          />
          <p className="description" style={{ marginTop: "70px" }}>
            pixel watch 3
          </p>
          <p className="Price mt-4">$349.99</p>
        </div>
        <div className="card3" style={{ order: 4 }}>
          <img
            style={{ height: "250px" }}
            src="https://xcessorieshub.com/wp-content/uploads/2024/07/Samsung-Galaxy-Watch-7-44mm-1.webp"
            alt="Samsung Galaxy Watch 7 44mm"
          />
          <p className="description" style={{ marginTop: "20px" }}>
            Samsung Galaxy Watch 7 44mm
          </p>
          <p className="Price mt-4">$259.99</p>
        </div>
      </div>
    </div>
  )
}
