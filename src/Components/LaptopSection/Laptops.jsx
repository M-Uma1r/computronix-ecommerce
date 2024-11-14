import React from "react";
import "./Laptops.css";

export default function Laptops() {
  return (
    <div className="Laptops-container">
      <div className="heading">
        <p className="Product-Heading">LAPTOPS</p>
        
      </div>
      <div className="cards">
        <div className="card3" style={{ order: 1 }}>
          <img
            className="mt-4"
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/notebook-xps-14-9440t-sl-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=675&qlt=100,1&resMode=sharp2&size=675,402&chrss=full"
            alt="Apple iMac 24"
            style={{ height: "160px" , width: "220px" , marginLeft:"25px" }}
          />
          <p className="description" style={{marginTop:"70px"}} >
            Apple iMac 24" | Apple M3 8-Core CPU, 24GB, 2TB SSD, 10-Core GPU |
            Silver
          </p>
          <p className="Price mt-4">$1,699</p>
        </div>
        <div className="card3" style={{ order: 2 }}>
          <img
            src="https://m.media-amazon.com/images/I/71xZUkl5dyL._AC_SX466_.jpg"
            alt="ASUS Zenbook Duo(2024)"/>
          <p className="description" style={{marginTop:"20px"}}>
            ASUS Zenbook Duo(2024)
          </p>
          <p className="Price mt-4">$1,099.99</p>
        </div>
        <div className="card3" style={{ order: 3 }}>
          <img style={{height:"180px"}}
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=510&qlt=100,1&resMode=sharp2&size=510,402&chrss=full"
            alt="Alienware m16 R2 Gaming Laptop"
          />
          <p className="description" style={{marginTop:"90px"}}>
            Alienware m16 R2 Gaming Laptop
          </p>
          <p className="Price mt-4">$829</p>
        </div>
        <div className="card3" style={{ order: 4 }}>
          <img style={{height:"200px"}}
            src="https://p4-ofp.static.pub/ShareResource/na/products/thinkpad/560x450/lenovo-thinkpad-x1-carbon-g12-01.png"
            alt="ThinkPad X1 Carbon Gen 12 (14ʺ Intel) Laptop"
          />
          <p className="description" style={{marginTop:"70px"}}>ThinkPad X1 Carbon Gen 12 (14ʺ Intel) Laptop</p>
          <p className="Price mt-4">$1,361.88</p>
        </div>
      </div>
    </div>
  );
}
