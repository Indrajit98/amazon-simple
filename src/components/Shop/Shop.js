import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css'

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setproducts] = useState(first10);
  const [cart ,setCart] = useState([])
  // console.log(products);
  const handleAddProduct = (product) => {
    // console.log('indrajt', product)
    const newcart =[...cart,product];
    setCart(newcart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
      
        {
            products.map( pro => <Product handleAddProduct = {handleAddProduct} product={pro}></Product>)
        }

     </div>
      <div className="card-container">
        <Cart cart={cart}></Cart>
     </div>
    </div>
  );
};

export default Shop;
