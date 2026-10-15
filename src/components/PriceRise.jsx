import React from 'react';
import ProductCard from './ProductCard';

const PriceRise = ({ products }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.filter((product) => product.change.dir === "up").map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default PriceRise;