import React, { useEffect, useState } from 'react';
import { addToDb, decreaseDb, getStoredValue } from '../../utilities/storage';
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

    //----------------------------------------- adding value to local storage
    const[products, setProducts] = useState([]);
    function addToCart(element){
        let newCart = [];
        addToDb(element.id)
        newCart = [...products, element];
        setProducts(newCart);
    }
    //----------------------------------------- decrease from storage
    let [decreased, setDecreased] = useState([]);
    function decrease(element){
        let newCart = [];
        decreaseDb(element.id);
        newCart = [...products, element];
        setDecreased(newCart);
    }

    //----------------------------------------  getting value from  local storage
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
    },[products, product, decreased])
    

    //----------------------------------------- showing quantity in cart div
    let[amount, setAmount] = useState([]);
    let[price, setPrice] = useState([]);
    let[shipping, setShipping] = useState([]);
    let[taxs, setTaxs] = useState([]);
    let[grand, setGrand] = useState([]);

    let  quantity = 0;
    let totalPrice = 0;
    let shippingFee = 0;
    let tax = 0;
    let grandTotal = 0;
    useEffect(()=>{
        for (let element of cart){
            quantity = quantity + element.quantity;
            totalPrice += (element.price * element.quantity);
            shippingFee += (element.shipping * element.quantity);             
        }
        tax = (totalPrice * 0.1);
        grandTotal = (totalPrice + shippingFee + tax);


        setPrice(totalPrice);
        setShipping(shippingFee);
        setTaxs(tax.toFixed(2));
        setGrand(grandTotal);
        setAmount(quantity);
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
                <div className="calculation">
                <h3>Product Added : {amount} </h3>
                <p>Total Price : {price} </p>
                <p>Shipping Fee : {shipping} </p>
                <p>Tax : {taxs} </p>
                <p id="grand">Grand Total : {grand} </p>
                </div>
                {
                    cart.map(index=><Cart
                        index = {index}
                        key = {index.id}
                        addToCart={addToCart}
                        decrease = {decrease}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Body;