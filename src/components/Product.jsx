import React from "react";

export default function Product() {
  return (
    <div className="card">
      <img
        src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
        alt="..."
      />
      <div className="card-body">
        <p>product name</p>
        <p>100$</p>
        <button className="btn btn-dark">
          Add to cart
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}
