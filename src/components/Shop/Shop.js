import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10);
  console.log(products);

  return (
    <div className="shop-container">
      <div className="product-container">
      
        {
            products.map( pro => <Product product={pro}></Product>)
        }

     </div>
      <div className="card-container">

     <h3>card container</h3>

     </div>
    </div>
  );
};

export default Shop;
