import Image from "next/image";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-fit min-w-fit rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="Hero Image"
          src="/bazar-hero.png"
          className="max-w-sm rounded-lg shadow-2xl"
          width={500}
          height={300}
        />
        <div>
          <h1 className="text-5xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
          <p className="py-6">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="btn btn-primary">সব পণ্য দেখুন</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;