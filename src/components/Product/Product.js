import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  // console.log(props);


  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt="" />
      </div>

      <div className="productDetails">
        <h3>{props.product.name}</h3>
        <p>
          <small>By: {props.product.seller}</small>
        </p>
        <h4>${props.product.price}</h4>
        <p>
          <small>Only {props.product.stock} left in stock - order soon</small>
        </p>
        <button onClick={ () => props.handleAddProduct(props.product)} > <FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
      </div>
    </div>
  );
};

export default Product;
