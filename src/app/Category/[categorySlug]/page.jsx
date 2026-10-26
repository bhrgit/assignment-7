import React from 'react';
import ProductCard from '@/components/ProductCard';
import baseUrl from "@/services/baseUrl";

export const instant = false;

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
    // console.log(data);
    return data;
    }

    const allCategories = await getAllCategories();
    const currentCategory = allCategories.find((cat) => cat.slug === categorySlug);
    // console.log(currentCategory);

    return (
        <div>
            <p>{currentCategory.icon}</p>
            <h1>{currentCategory.nameBn}</h1>  
            <h1>{fatchedProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন</h1>       
 
            <h1>মোট {fatchedProducts.length}টি পণ্য দেখানো হচ্ছে</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {fatchedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            
        </div>
    );
};

export default CategoryProducts;