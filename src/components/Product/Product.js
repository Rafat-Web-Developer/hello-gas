import React from 'react';

const Product = props => {
    const {img, name, price} = props.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">Price : {price}</h6>
                </div>
                <div className="card-footer">
                    <button className='btn btn-primary w-100 fw-bold'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;