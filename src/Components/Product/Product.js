import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.index);
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
            <div className="card-bottom">
                <h4>Add To Cart</h4>
            </div>
        </div>
    );
};

export default Product;