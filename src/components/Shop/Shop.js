import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleClickToAddCart = selectedProductId => {
        let newCartProducts = [];

        const existProduct = cartProducts.find(product => product.id === selectedProductId);
        
        if(existProduct){
            alert("You can't add this product. Because it's already added in cart.");
        }else{
            const findProduct = products.find(product => product.id === selectedProductId);
            newCartProducts = [...cartProducts, findProduct];
            setCartProducts(newCartProducts);
        }
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
                <Cart cartProducts={cartProducts}></Cart>
            </div>
        </div>
    );
};

export default Shop;