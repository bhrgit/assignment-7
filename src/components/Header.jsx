
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",});

    

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 lg:px-8 shadow-xs flex justify-between items-center transition-all">
      
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center p-1.5 shadow-xs border border-primary/20">
          <Image
            alt="বাজার দর Logo"
            src="/logo-icon.png"
            className="object-contain"
            width={32}
            height={32}
            priority
          />
        </div>
        <div className="flex flex-col">
          <Link href="/" className="font-bold text-lg leading-tight tracking-tight hover:text-primary transition-colors">
            বাজার দর
          </Link>
          <span className="text-[11px] font-medium text-base-content/60 capitalize">
            {/* {date}  */}
          </span>
        </div>
      </div>

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-7 rounded-full">
            <Image
              alt="Logo"
              src="/logo-icon.png"
              className="bg-primary rounded-full p-1"
              width={20}
              height={20}
            />
          </div>
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;

