import React from 'react';


const ProductCard = ({product}) => {
    return (
        <div>
            <h2>{product.nameBn}</h2>
            <p>{product.unit}</p>
            <p>{product.image}</p>

            {/* <p>Price: {product.price}</p> */}
        </div>
    );
};

export default ProductCard;