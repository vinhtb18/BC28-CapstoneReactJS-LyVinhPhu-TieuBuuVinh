import React from "react";
import Product from "../../components/Product";

export default function Home() {
  return (
    <div className="container">
      <h3>Shoes app</h3>
      <div className="row">
        <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div>
        <div className="col-3">
          <Product />
        </div>
      </div>
    </div>
  );
}
