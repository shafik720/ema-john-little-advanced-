import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/storage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css';

const Body = () => {

    // getting value from api
    const[product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);

    //adding value to local storage
    function addToCart(element){
        console.log(element);
        addToDb(element.id)
    }
    return (
        <div className="body-div">
            <div className="left-div">
                {
                    product.map(index=><Product
                        index = {index}
                        key = {index.id}
                        addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className="right-div">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Body;