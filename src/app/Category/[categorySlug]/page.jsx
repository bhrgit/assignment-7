import React from 'react';
import ProductCard from '@/components/ProductCard';
import baseUrl from "@/services/baseUrl";

const getCategoryProducts = async (categorySlug) => {
    "use cache";

    const res = await fetch(`${baseUrl}/products?category=${categorySlug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
};

const getAllCategories = async () => {
    "use cache";

    const res = await fetch(`${baseUrl}/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return res.json();
};

const CategoryProductsContent = async ({ params }) => {
    const { categorySlug } = await params;

    const [fatchedProducts, allCategories] = await Promise.all([
        getCategoryProducts(categorySlug),
        getAllCategories(),
    ]);
    const currentCategory = allCategories.find((cat) => cat.slug === categorySlug);

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

const CategoryProducts = ({ params }) => (
    <React.Suspense fallback={<p>পণ্য লোড হচ্ছে...</p>}>
        <CategoryProductsContent params={params} />
    </React.Suspense>
);

export default CategoryProducts;
