import React from 'react';
import CartProduct from '../CartProduct/CartProduct';

const Cart = ({cartProducts}) => {

    let count = 0;
    count = cartProducts.length;

    return (
        <div className='mt-3 sticky-top'>
            <h3 className='text-center text-white mb-4'>Your Cart</h3>
            {count === 0 && <h5 className='text-center'>Empty cart</h5>}
            <div>
                {
                    cartProducts.map(product => <CartProduct key={product.id} cartProduct={product}></CartProduct>)
                }
            </div>
            <div className='text-center'>
                <div className='my-2'>
                    <button className='btn btn-success'>Choose 1 for you</button>
                </div>
                <div>
                    <button className='btn btn-danger'>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;