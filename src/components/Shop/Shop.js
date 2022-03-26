import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleClickToAddCart = () => {
        console.log("Clicked");
    }

    return (
        <div className='row my-5'>
            <div className='col-9'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} handleClick={handleClickToAddCart}></Product>)
                    }
                </div>
            </div>
            <div className='col-3 bg-primary rounded-3'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;