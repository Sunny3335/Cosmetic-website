import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
const NavBar = () => {
  return (
    <div className=" bg-white py-4 stick top-0 z-10">
      <div className=" container flex justify-between items-center">
        <IoMenuOutline className="sm:hidden text-[26px]" />
        <Link href="/" className="text-4xl font-semibold hover:text-accent">
          Logo
        </Link>

        <ul className="gap-6 hidden sm:flex">
          <Link href="/" className="navLink">
            Home
          </Link>
          <li className="navLink">Shop</li>
          <li className="navLink">Blog</li>
          <li className="navLink">Pages</li>
          <li className="navLink">Contact</li>
        </ul>

        <div className="flex gap-6 text-[26]">
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart />
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[18px] h-[18px] rounded-full text-white text-[14px] grid place-items-center">
              0
            </div>
          </div>
          <IoIosSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
