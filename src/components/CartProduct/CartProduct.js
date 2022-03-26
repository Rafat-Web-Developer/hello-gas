import React from 'react';

const CartProduct = ({cartProduct}) => {
    
    const {img, name} = cartProduct;

    return (
        <div className='row m-2'>
            <div className='col-2 d-none d-lg-block'>
                <img src={img} alt="" width="30"/>
            </div>
            <div className='col-8'>
                <p className='text-white'>{name}</p>
            </div>
            <div className='col-2'>
                <button className='btn btn-dark'>X</button>
            </div>
        </div>
    );
};

export default CartProduct;