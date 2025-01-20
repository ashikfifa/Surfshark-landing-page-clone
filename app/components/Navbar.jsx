"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center ">
        {/* Left: Logo */}
        <div className=" flex w-full justify-between items-center">
        <div className=" flex gap-10 items-center">
        <div className="text-black text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Beside logo */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className="text-black flex items-center gap-1 hover:text-gray-700"
              onClick={() => handleMouseEnter("product")}
            >
              Product
            </span>
          </Link>
          <div
            className="relative"
            onClick={() => handleMouseEnter("resources")}
          >
            <button className="text-black flex items-center gap-1 hover:text-gray-700">
              Resources
            </button>
          </div>
          <Link href="/enterprise">
            <span className="text-black hover:text-gray-700">Enterprise</span>
          </Link>
          <Link href="/pricing">
            <span className="text-black hover:text-gray-700">Pricing</span>
          </Link>
        </div>
        </div>
        {/* right side buttons */}
        <div className="hidden md:flex space-x-8">
          <Link href="/">
            <span
              className="text-black flex items-center gap-1 hover:text-gray-700"
              onClick={() => handleMouseEnter("product")}
            >
              Product
            </span>
          </Link>
          <div
            className="relative"
            onClick={() => handleMouseEnter("resources")}
          >
            <button className="text-black flex items-center gap-1 hover:text-gray-700">
              Resources
            </button>
          </div>
          <Link href="/enterprise">
            <span className="text-black hover:text-gray-700">Enterprise</span>
          </Link>
        </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link href="/">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="block px-4 py-2 text-black hover:bg-gray-100">
              Contact
            </span>
          </Link>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
