import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import baseUrl from "@/services/baseUrl";


const getAllProducts = async () => {
        const res = await fetch(`${baseUrl}/products`,
            { next: { revalidate: 10 } }
        );
        if(!res.ok){
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return data;
    }

const Marquee  =  async () => {
    const products = await getAllProducts();
    
    return (
        <div>
            <MarqueeText
                className="py-1 my-1 bg-base-200"
                duration={20}
                direction="left">
                    {products.map((product, index) => (
                        <div key={index}  className="mx-5">
                            <span className="mr-2">{product.image}</span>
                            <span>{product.nameBn}</span>
                            <span> - </span>
                            <span>৳{product.today}</span>
                            <span> Per {product.unit} </span>
                            <span> - </span>
                            <span className={product.change.dir === "up" ? "text-red-500" : product.change.dir === "down" ? "text-green-500" : "text-gray-800"}>
                                {product.change.dir === "up" ? "▲" : product.change.dir === "down" ? "▼" : "→"} {product.change.pct}%
                            </span>
                        </div>
                    ))}
                </MarqueeText>
        </div>
    );
};

export default Marquee ;