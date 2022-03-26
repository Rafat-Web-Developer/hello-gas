import React, { useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cartProducts, clickChooseAgain}) => {

    const [selectedOneItem, setSelectedOneItem] = useState("");

    let count = 0;
    count = cartProducts.length;

    const chooseOneProduct = () => {
        let randomNumber = Math.round(Math.round(Math.random()*10)/3);
        setSelectedOneItem(cartProducts[randomNumber]);
    }


    return (
        <div className='mt-3 sticky-top'>
            <h3 className='text-center text-white mb-4'>Your Cart</h3>
            {count === 0 && <h5 className='text-center'>Empty cart</h5>}
            
            {selectedOneItem && <div className="alert alert-success" role="alert">
                Your lucky gas is {selectedOneItem.name}. And it's price is {selectedOneItem.price}
            </div>}
            
            <div>
                {
                    cartProducts.map(product => <CartProduct key={product.id} cartProduct={product}></CartProduct>)
                }
            </div>
            <div className='text-center'>
                <div className='my-2'>
                    <button className='btn btn-success' onClick={chooseOneProduct}>Choose 1 for you</button>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={clickChooseAgain}>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;