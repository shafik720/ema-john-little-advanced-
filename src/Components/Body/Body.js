import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css';

const Body = () => {
    return (
        <div>
            <Product></Product>
            <Cart></Cart>
        </div>
    );
};

export default Body;