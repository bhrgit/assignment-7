import React from 'react';
import baseUrl from "@/services/baseUrl";
import ProductDetailsCard from '@/components/ProductDetailsCard';
import Link from 'next/link';



const getSingleProduct = async (slug) => {
    const res = await fetch(`${baseUrl}/products/${slug}`,
        {  cache: 'no-store' }) 
    ;
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    console.log(data);
    return data;
    
};


const ProductDetailsPage = async ({ params }) => {
    const { slug } = await params;
    const product = await getSingleProduct(slug);

    return (
       
        <ProductDetailsCard  key={product.id}  product={product} />
       
    );
};

export default ProductDetailsPage;