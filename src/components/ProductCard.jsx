import Image from 'next/image';
import Link from 'next/link';

import React from 'react';


const ProductCard = ({product}) => {
    const image = product?.image;
    // image problem resolved by AI
    const isImageUrl = typeof image === 'string' && /^(https?:\/\/|\/)/i.test(image);

    return (      
        <Link
          href={`/products/${product.id}`}>
            <div className="border border-gray-300 bg-base-200 rounded-lg p-4 gap-2">           
            <div className="flex flex-wrap items-center my-1 gap-3">
              {/* Product Image */}
              <div className="w-32 h-32 shrink-0 bg-base-300 rounded-lg flex items-center justify-center">
                {isImageUrl ? (
                  <Image
                    src={image}
                    alt={product?.nameBn || "Product Image"}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : image ? (
                  <span role="img" aria-label={product.nameBn} className="text-5xl">
                    {image}
                  </span>
                ) : null}
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold">{product.nameBn}</h2>
                <p>Per {product.unit}</p>
              </div>
            </div>

            <div className="flex justify-between items-center my-1">
              <p>আজকের দাম <br/> <span className="text-2xl font-bold">৳{product.today}</span></p>

              <p
                className={
                  product.change.dir === "up"
                    ? "text-red-500"
                    : product.change.dir === "down"
                    ? "text-green-500"
                    : "text-gray-800"
                }
              >
                {product.change.dir === "up"
                  ? `▲ ${product.change.pct}%`
                  : product.change.dir === "down"
                  ? `▼ ${Math.abs(product.change.pct)}%`
                  : `- ${Math.abs(product.change.pct)}%`}
              </p>
            </div>

            <div>           
              
            </div>
            
          </div>
          </Link>       
        

    );
};

export default ProductCard;