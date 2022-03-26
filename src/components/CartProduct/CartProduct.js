import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartProduct = ({cartProduct}) => {
    
    const {img, name} = cartProduct;

    return (
        <div className='row m-2'>
            <div className='col-2 d-none d-lg-block'>
                <img src={img} alt="" width="30"/>
            </div>
            <div className='col-9 col-sm-8'>
                <p className='text-white'>{name}</p>
            </div>
            <div className='col-3 col-sm-2'>
                <button className='btn btn-dark'>
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default CartProduct;