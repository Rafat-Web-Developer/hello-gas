import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='row my-5'>
            <div className='col-8'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <div className='col-4'>
                <h1>Right</h1>
            </div>
        </div>
    );
};

export default Shop;