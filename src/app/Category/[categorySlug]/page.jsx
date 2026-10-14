import React from 'react';
import ProductCard from '../../../components/ProductCard';
import baseUrl from "@/services/baseUrl";




const CategoryProducts = async ({ params }) => {
    const { categorySlug } = await params;

    const res = await fetch(`${baseUrl}/products?category=${categorySlug}`);
    const fatchedProducts = await res.json();


    const allCategories = async () => {
    const res = await fetch(`${baseUrl}/Categories`);
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
        return res.json();
    };
    const currentCategory = allCategories.find((cat) => cat.slug === categorySlug)    ;

    return (
        <div>
            <p>{currentCategory.icon}</p>
            <h1>{currentCategory.nameBn}</h1>
            
            
            <h1>{fatchedProducts.length}</h1>
            <div>
                {fatchedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            
        </div>
    );
};

export default CategoryProducts;