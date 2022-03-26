import React from 'react';

const Cart = () => {
    
    let count = 0;

    return (
        <div className='mt-3 sticky-top'>
            <h3 className='text-center text-white mb-4'>Your Cart</h3>
            {count === 0 && <h5 className='text-center'>Empty cart</h5>}
        </div>
    );
};

export default Cart;