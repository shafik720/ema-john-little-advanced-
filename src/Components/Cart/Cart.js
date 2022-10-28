import React from 'react';
import './Cart.css'; 

const Cart = (props) => {
    // console.log(props.index);
    let{id, img, price, name} = props.index;
    
    
    return (
        <div className="cart-card">
            <p>Prouduct Name : {name}  </p>
        </div>
    );
};

export default Cart;