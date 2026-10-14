import React from 'react';
import ProductCard from './ProductCard';
import baseUrl from '../services/baseUrl';

const AllProducts = () => {

    const getAllProducts = async () => {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        return data;
    };
    // console.log(data);
    return (
        <div>
            {data.map((product) => (
                <ProductCard key={product.id} product={product} />
                
            ))}
        </div>
    );
};

export default AllProducts;