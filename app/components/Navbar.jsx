"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import brandLogo from "@/public/img/brand-logo.svg";
import webIcon from "@/public/img/webIcon.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 bg-white">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center w-full lg:w-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={brandLogo} alt="Brand Logo" width={120} height={40} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 ml-10">
            <Link
              href="/"
              className="text-navbarText hover:text-gray-700 transition"
            >
              Products
            </Link>
            <Link
              href="/prices"
              className="text-navbarText hover:text-gray-700 transition"
            >
              Prices
            </Link>
            <Link
              href="/downloads"
              className="text-navbarText hover:text-gray-700 transition"
            >
              Downloads
            </Link>
            <Link
              href="/resources"
              className="text-navbarText hover:text-gray-700 transition"
            >
              Resources
            </Link>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Language Selector or Icon */}
          <Image src={webIcon} alt="Web Icon" width={24} height={24} />

          {/* Sign In */}
          <Link
            href="/signin"
            className="text-navbarText hover:text-gray-700 transition"
          >
            Sign in
          </Link>

          {/* Download Button */}
          <Button variant="destructive">Download Surfshark</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition"
          >
            Products
          </Link>
          <Link
            href="/prices"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition"
          >
            Prices
          </Link>
          <Link
            href="/downloads"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition"
          >
            Downloads
          </Link>
          <Link
            href="/resources"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition"
          >
            Resources
          </Link>
          <Link
            href="/signin"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition"
          >
            Sign in
          </Link>
          <div className="px-4 py-2">
            <Button variant="destructive" className="w-full">
              Download Surfshark
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
