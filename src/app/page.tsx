import Banner from "@/components/Banner";
import baseUrl from "@/services/baseUrl";
import AllProducts from "@/components/AllProducts";


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
      <h2>আজ দাম বেড়েছে</h2>
      <div></div>
      <h2>আজ দাম কমেছে</h2>
      <div></div>
      <h2>সব পণ্য</h2>
      <p>মোট {allProducts.length} টি পণ্য দেখানো হচ্ছে</p>
      <AllProducts products={allProducts} />
      
      
      <div>
        
      </div>
      

      
    

    </section>
  );
}
