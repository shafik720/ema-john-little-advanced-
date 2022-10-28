import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    let{id, img, price, seller, name, ratings} = props.index;
    return (
        <div className="cardx">
            <div className="card-img">
                <img src={img} alt=""/>
            </div>
            <div className="card-body">
                <h3>{name}</h3>
                <h4>Price : ${price}</h4>
                <p>Rating : {ratings} Star</p>
                <p>Manufacturer : {seller}</p>
            </div>
            <div onClick={()=>props.addToCart(props.index)} className="card-bottom">
                <h4>Add To Cart <span><FontAwesomeIcon icon={faShoppingBag} /></span></h4>
            </div>
        </div>
    );
};

export default Product;