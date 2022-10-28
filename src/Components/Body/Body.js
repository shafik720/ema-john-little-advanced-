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
    const[cart, setCart]  = useState([]);
    useEffect(()=>{
        let storedCart = getStoredValue();
        let freshCart = [];
        for(let id in storedCart){
            let addedProduct = product.find(index=>index.id === id);
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                freshCart.push(addedProduct);
            }  
        setCart(freshCart);
        }
    },[products, product])
    
    let[amount, setAmount] = useState([]);
    let  quantity = 0;
    useEffect(()=>{
        for (let element of cart){
            quantity = quantity + element.quantity;
        }
        setAmount(quantity);
        console.log(amount);
    },[cart])
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
                <h2>Product Added : {amount} </h2>
                {
                    cart.map(index=><Cart
                        index = {index}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Body;