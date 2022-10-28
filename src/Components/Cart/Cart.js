import React from 'react';
import './Cart.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    // console.log(props.index);
    let{id, img, price, quantity} = props.index;
    
    
    return (
        <div className="cart-card">
            <div className="card-left">
                <div className="left-img">
                    <img src={img} alt=""/>
                </div>
                <div className="left-details">
                    <p>Price : {price} </p>
                    <p>Quantity : {quantity} </p>
                </div>
            </div>
            <div className="card-right">
                <span draggable onClick={()=>props.addToCart(props.index)} ><FontAwesomeIcon icon={faPlus} /></span>
                <span draggable onClick={()=>props.decrease(props.index)} ><FontAwesomeIcon icon={faMinus} /></span>
            </div>
        </div>
    );
};

export default Cart;