import React from "react";

export default function Product({ product }) {
  // const {product}=props;
  return (
    <div className="card" id="card">
      <img id="card_img" src={product.image} alt="..." />
      <div className="card-body" id="card_content">
        <p id="card_content_name">{product.name}</p>
        <p id="card_content_shortDescription">{product.shortDescription}</p>
      </div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-dark w-100" id="card_content_addCart">
            Buy now
            <i class="fa fa-cart-plus"></i>
          </button>
        </div>
        <div className="col-6 text-center ">
          <p className="w-100" id="card_content_price">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
