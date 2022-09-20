import React from 'react'

export default function Product({product}) {

    // const {product}=props;
  return (
    <div className='card'>
        <img src={product.image} alt='...' />
        <div className='card-body'>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className='btn btn-dark'>Add to cart 
                <i class="fa fa-cart-plus"></i>
            </button>
        </div>
    </div>
  )
}
