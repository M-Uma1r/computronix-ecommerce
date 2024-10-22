import React from "react";
import "./DesktopSection.css";

export default function DesktopSection() {
  return (
    <div className="Desktop-container">
      <div className="heading">
        <p className="Product-Heading">DESKTOPS</p>
      </div>
      <div className="cards">
        <div className="card3" style={{ order: 1 }}>
          <img
            src="https://www.czone.com.pk/images/thumbnails-large/copy-copy-copy-38-czone.com.pk-1540-15889-020524100012.jpg"
            alt="Apple iMac 24"
          />
          <p className="description">
            Apple iMac 24" | Apple M3 8-Core CPU, 24GB, 2TB SSD, 10-Core GPU |
            Silver
          </p>
          <p className="Price mt-4">$1,699</p>
        </div>
        <div className="card3" style={{ order: 4 }}>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6580/6580517_sd.jpg;maxHeight=640;maxWidth=550;format=webp"
            alt="MSI Codex R2 Gaming Desktop: Intel Core i5-14400F, Geforce RTX 4060 Ti, 16GB DDR5, 1TB m.2 NVMe SSD, 80+ Gold PSU, WiFi, Keyboard & Mouse, DIY Friendly, Windows 11 Home: A14NUD5-213US"
          />
          <p className="description">
            MSI - Codex R2 Gaming Desktop - Intel Core i5-14400F - 16GB Memory -
            NVIDIA GeForce RTX 4060 - 1TB SSD - Black
          </p>
          <p className="Price mt-4">$899.99</p>
        </div>
        <div className="card3" style={{ order: 4 }}>
          <img
            src="https://www.datocms-assets.com/34299/1727324328-player-1-ww-09-04-24-hero-black-badge.png?ixlib=js-3.8.0&w=500&h=500&dpr=1&q=75"
            alt="NZXT Player: One -H5 Flow Gaming PC with RTX 3050 or RTX 4060 GPU"
          />
          <p className="description">
            NZXT Player: One -H5 Flow Gaming PC with RTX 3050 or RTX 4060 GPU
          </p>
          <p className="Price mt-4">$829</p>
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
  );
}
