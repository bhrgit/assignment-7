import React from 'react';
import baseUrl from '../../../services/baseUrl';

const getSingleProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/products/${slug}`,
        { next: { revalidate: 10 } }
    );
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
    
}


const ProductDetailsPage = async ({ params }) => {
    const { slug } = await params;
    const product = await getSingleProduct(slug);

    return (
        <div>
            <h1>{product.nameBn}</h1>
            <p>{product.unit}</p>
            {/* <p>{product.image}</p> */}
            {/* <p>Price: {product.price}</p> */}
        </div>
    );
};

export default ProductDetailsPage;