import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css';

const Body = () => {
    const[product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="body-div">
            <div className="left-div">
                {
                    product.map(index=><Product
                        index = {index}
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