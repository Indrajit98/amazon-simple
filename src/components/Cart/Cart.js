import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    // const totalPrice = cart.reduce((total,pro) => total + pro.price,0)
    let totalPrice =0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price
    }
    let shipping = 0;
    if(totalPrice>35){
        shipping = 0;
    }
    else if(totalPrice>15){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping=12.99;
    }
    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2)
       

    return (
        <div>
            <h4>order summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {totalPrice.toFixed(2)}</p>
            <p><small>Tax+Vat:{tax}</small></p>
            <p><small>Shipping cost:{shipping}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
        
    );
};

export default Cart;