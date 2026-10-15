import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import React from "react";


const Navbar = async () => {
  const res = await fetch(`${baseUrl}/categories`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  // console.log(data);
 

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/category/${item.slug}`}><span>{item.icon}</span>{item.nameBn}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
