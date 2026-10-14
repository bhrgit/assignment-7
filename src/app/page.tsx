import Image from "next/image";
import ProductCard from "../components/ProductCard";
import Banner from "@/components/Banner";
import baseUrl from '../services/baseUrl';


const getProducts = async () => {
    const res = await fetch(`${baseUrl}/products`,
        { next: { revalidate: 10 } }
    );
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
    const products = await res.json();
    return products;
    
}

export default function Home () {
  
  return (
    <section>
      <Banner></Banner>
      <h2>আজ দাম বেড়েছে</h2>
      <div></div>
      <h2>আজ দাম কমেছে</h2>
      <div></div>
      <h2>সব পণ্য</h2>
      <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
      
      
      <div>
        
      </div>
      

      
    

    </section>
  );
}
