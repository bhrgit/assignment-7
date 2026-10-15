import React from 'react';
import ProductCard from './ProductCard';

const PriceFall = ({ products }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.filter((product) => product.change.dir === "down").map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default PriceFall;