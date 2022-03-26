import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleClick}) => {
    const {id, img, name, price} = product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">Price : {price}</h6>
                </div>
                <div className="card-footer">
                    <button className='btn btn-primary w-100 fw-bold' onClick={() => handleClick(id)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
                </div>
            </div>
        </div>
    );
};

export default Product;