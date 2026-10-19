

export default function ProductDetailsCard({product}) {
  return (
    <div className="bg-[#f7f9fa] min-h-screen p-4 md:p-8 font-sans antialiased text-[#2c3e50]">
      <div className="max-w-6xl mx-auto space-y-6">
        
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-4">
            
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center border border-red-200 shrink-0">
              <span className="text-xl">{product.icon}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{product.nameBn}</h1>
              <p className="text-sm text-gray-500 mt-0.5">{product.description}</p>
              <p className="text-xs text-gray-400 mt-2">
                {product.change.pct > 0 ? `গতকালের তুলনায় আজ দাম বেড়েছে ${product.today - product.yesterday} টাকা` : `গতকালের তুলনায় আজ দাম কমেছে ${Math.abs(product.today - product.yesterday)} টাকা`}
              </p>
            </div>
          </div>
          
         
          <div className="bg-[#f8f9fa] rounded-lg p-4 border border-gray-200/60 min-w-35 text-center self-stretch md:self-auto flex flex-col justify-center">
            <span className="text-xs text-gray-500 block mb-1">আজকের দাম</span>
            <span className="text-3xl font-extrabold text-gray-800">{product.today}</span>
            <span className="text-xs text-gray-400 block mt-0.5">টাকা / {product.unit}</span>
            <div className="mt-2 inline-flex items-center justify-center gap-1 text-red-500 text-xs font-medium bg-red-50 px-2 py-0.5 rounded">
              <span>▲</span>
              <span>{product.change.pct}</span>
            </div>
          </div>
        </div>

        {/* 2. PRICE SUMMARY ROW */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">দামের সারসংক্ষেপ</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {summaryStats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <span className="text-sm text-gray-500 block">{stat.label}</span>
                <span className={`text-2xl font-bold block my-1.5 ${idx === 1 ? 'text-red-500' : 'text-emerald-600'}`}>
                  {stat.price}
                </span>
                <span className="text-xs text-gray-400 block">{stat.subtext}</span>
              </div>
            ))}
          </div> */}
        </div>

       
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">বাজারভিত্তিক আজকের দাম</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fdfdfe] border-b border-gray-200 text-sm font-semibold text-gray-600">
                  <th className="p-4 pl-6">বাজার</th>
                  <th className="p-4">বিভাগ</th>
                  <th className="p-4 text-center">সর্বনিম্ন</th>
                  <th className="p-4 text-center">সর্বাধিক</th>
                  <th className="p-4 text-center">গড়</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {product.markets.map((mkt, index) => (
                  <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 pl-6 font-medium text-gray-900">{mkt.market}</td>
                    <td className="p-4 text-gray-500">{mkt.division}</td>
                    <td className="p-4 text-center text-emerald-600 font-medium">{mkt.min}</td>
                    <td className="p-4 text-center text-red-500 font-medium">{mkt.max}</td>
                    <td className="p-4 text-center font-semibold text-gray-800 bg-gray-50/40">{(mkt.max + mkt.min) / 2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}