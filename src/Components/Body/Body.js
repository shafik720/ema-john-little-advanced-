import React, { useEffect, useState } from 'react';
import { addToDb, getStoredValue } from '../../utilities/storage';
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
    const[products, setProducts] = useState([]);
    function addToCart(element){
        let newCart = [];
        addToDb(element.id)
        newCart = [...products, element];
        setProducts(newCart);
    }

    //getting value from  local storage
    useEffect(()=>{
        let storedCart = getStoredValue();
        console.log(storedCart);
    },[products])
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