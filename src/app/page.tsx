import Banner from "@/components/Banner";
import baseUrl from "@/services/baseUrl";
import AllProducts from "@/components/AllProducts";
import PriceRise from "@/components/PriceRise";
import PriceFall from "@/components/PriceFall";


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

export default async function Home () {
    const allProducts = await getAllProducts();

  return (
    <section>
      <Banner></Banner>
      <h2 className="text-xl font-bold my-4">আজ দাম বেড়েছে</h2>
      <div>
        <PriceRise products={allProducts} />
      </div>
      <h2 className="text-xl font-bold my-4">আজ দাম কমেছে</h2>
      <div>
      <PriceFall products={allProducts} />
      </div>
      <h2 className="text-xl font-bold my-4">সব পণ্য</h2>
      <p>মোট {allProducts.length} টি পণ্য দেখানো হচ্ছে</p>    
          
      <div>
        <AllProducts products={allProducts} />
      </div>
      

      
    

    </section>
  );
}
