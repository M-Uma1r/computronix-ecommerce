import React, { useState } from "react";
import "../Desktopsection/Desktopcard1.css";
import useData from "../Hooks/useProduct";

export default function ProductDetails() {
  const { getProductByProductcode } = useData();
  const product = getProductByProductcode("d1"); // Make sure this returns an object
  const similarProduct1 = getProductByProductcode("d2")
  const similarProduct2 = getProductByProductcode("d3")
  const similarProduct3 = getProductByProductcode("d4")
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(product.Price);
  const [finalPrice, setFinalPrice] = useState(count * price);


  console.log(product)
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
      {product ? (
        <div className="product d-inline-flex">
          {/* Left Section */}
          <div className="left-section " style={{ order: 1 }}>
            <img
              style={{
                height: "450px",
                width: "450px",
                margin: "40px",
                marginLeft: "80px",
              }}
              src={product.imgSrc} // Replace `desktopCard1?.imgSrc` with `product.imgSrc`
              alt={product.productTitle || "Product Image"}
            />
          </div>

          {/* Right Section */}
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
            {/* Product Title */}
            <div
              className="card1-title  mt-2 mx-3 h3"
              style={{ height: "70px", width: "96%", order: 1 }}
            >
                {product.productTitle}
            </div>

            {/* Product Description */}
            <div
              className="card1-description pt-3 mx-3"
              style={{ order: 2, width: "96%",height:"80%", fontSize: "1rem" }}
            >
              <li style={{ listStyleType: "none" }}>
                <p className="fw-bold d-inline">Product Code:</p>
                <p className="d-inline"> {product.productCode}</p>
              </li>
              <li style={{ listStyleType: "none" }}>
                <p className="fw-bold d-inline">Brand:</p>
                <p className="d-inline"> {product.Brand}</p>
              </li>
              <li style={{ listStyleType: "none" }}>
                <p className="fw-bold d-inline">Price Updated on: </p>
                <p className="d-inline">{product.priceUpdate}</p>
              </li>
              <li style={{ listStyleType: "none" }}>
                <p className="fw-bold d-inline ">Description: </p>
                <p className="d-inline">
                  {product.Description}
                </p>
              </li>
              <li className="mt-3 mx-3 fw-bolder" style={{ listStyleType: "none", color: "rgb(0, 179, 255)", fontSize: "1.1rem" }}>
                ${finalPrice}
              </li>

              {/* Counter */}
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

              {/* Add to Cart Button */}
              <li className="mt-2 mx-3" style={{ listStyleType: "none" }}>
                <button className="add-to-cart">
                  Add to cart
                </button>
              </li>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}

      {/* Similar Products Section */}
      <div
        className="similar-products mt-4 mx-3"
        style={{ width: "97vw" }}
      >
        <div className="Desktop-container">
          <div className="heading">
            <p className="Product-Heading">SIMILAR PRODUCTS</p>
          </div>
          <div className="cards justify-content-around">
            <div className="card3" style={{ order: 4 }}>
              <img
                src={similarProduct1.imgSrc }
                alt="MSI Codex R2 Gaming Desktop"
              />
              <p className="description mt-2">
                {similarProduct1.productTitle}
              </p>
              <p className="Price mt-4">${similarProduct1.Price}</p>
            </div>
            <div className="card3" style={{ order: 4 }}>
              <img
                src={similarProduct2.imgSrc}
                alt="NZXT Player: One Gaming PC"
              />
              <p className="description mt-2">
                {similarProduct2.productTitle}
              </p>
              <p className="Price mt-4">${similarProduct2.Price}</p>
            </div>
            <div className="card3" style={{ order: 4 }}>
              <img
                src={similarProduct3.imgSrc}
                alt="Alienware Aurora R16 Gaming Desktop"
              />
              <p className="description mt-2">{similarProduct3.productTitle}</p>
              <p className="Price mt-4">${similarProduct3.Price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
