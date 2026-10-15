import React from 'react';
import ProductCard from './ProductCard';
import baseUrl from "@/services/baseUrl";

 const getAllCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    console.log(data);
    return data;
    }

    const allCategories = await getAllCategories();
    const currentCategory = allCategories.find((cat) => cat.slug === categorySlug);
    console.log(currentCategory);



const CategoryProducts = async ({ params }) => {
    const { categorySlug } = await params;

    const res = await fetch(`${baseUrl}/products?category=${categorySlug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const fatchedProducts = await res.json();

    // console.log(fatchedProducts);

    const getAllCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    console.log(data);
    return data;
    }

    const allCategories = await getAllCategories();
    const currentCategory = allCategories.find((cat) => cat.slug === categorySlug);
    console.log(currentCategory);

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