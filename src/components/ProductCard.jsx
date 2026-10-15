import Image from 'next/image';
import React from 'react';


const ProductCard = ({product}) => {
    const image = product?.image;
    // image problem resolved by AI
    const isImageUrl = typeof image === 'string' && /^(https?:\/\/|\/)/i.test(image);

    return (
        <div className="border border-gray-300 bg-base-200 rounded-lg p-4 gap-2">
            
           <div className="flex flex-wrap my-1">
             <div className='bg-base-300 border-gray-100'> {isImageUrl ? (
                <Image
                    src={image}
                    alt={product?.nameBn || 'Product Image'}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain rounded-lg"
                />
              ) : image ? (
                <span role="img" aria-label={product.nameBn}>
                    {image}
                </span>
            ) : null}    
            </div>        
            <div>
                <h2>{product.nameBn}</h2>
                <p>Per {product.unit}</p>

            </div>
            
           </div>
            
            
            <div className="flex justify-between items-center my-1">
                <p>আজকের দাম: {product.today} টাকা</p>
                <p className={product.change.dir === "up" ? `text-red-500` : product.change.dir === "down" ? `text-green-500` : `text-gray-800`}>
                {product.change.dir === "up" ? `▲ ${product.change.pct}%` : product.change.dir === "down" ? `▼ ${Math.abs(product.change.pct)}%` : `- ${Math.abs(product.change.pct)}%`}</p>
            </div>
        </div>
    );
};

export default ProductCard;