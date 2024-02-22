import Link from "next/link";
import React from "react";
import { FaTrademark, FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const Header = () => {
  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-600 flex items-center mdl:justify-between">
      {/* =================== Left Start here ===================== */}
      <div className="hidden lgl:flex items-center gap-8">
        {/* Home */}
        <Link href="/">
          <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative overflow-hidden group">
            <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
              Home
            </span>
            <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
              Home
            </span>
          </div>
        </Link>
        {/* Pricing */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
            Pricing
          </span>
          <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
            Pricing
          </span>
        </div>
        {/* Services */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
            Services
          </span>
          <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
            Services
          </span>
        </div>
      </div>
      {/* =================== Left End here ======================= */}
      {/* =================== Middle Start here =================== */}
      <Link href="/">
        <div>
          <p className="text-3xl font-bold tracking-wider uppercase relative">
            My Blog
            <span className="absolute top-1 -right-2.5 text-xs text-center">
              <FaTrademark />
            </span>
          </p>
        </div>
      </Link>
      {/* =================== Middle End here ===================== */}
      {/* =================== Right Start here ==================== */}
      <div className="hidden mdl:flex items-center gap-8">
        {/* Shop */}
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
            Shop
          </span>
          <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
            Shop
          </span>
        </div>
        {/* Work */}
        <div className="w-12 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
            Work
          </span>
          <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
            Work
          </span>
        </div>
        {/* About */}
        <div className="w-16 h-6 cursor-pointer font-semibold text-gray-100 uppercase relative group overflow-hidden">
          <span className="absolute left-0 -translate-y-0 top-0 text-gray-100 group-hover:translate-y-5 transition-transform duration-300">
            About
          </span>
          <span className="absolute left-0 -translate-y-5 text-textDesignColor group-hover:translate-y-0 transition-transform duration-300">
            About
          </span>
        </div>
        {/* userIcon */}
        <Link href="/login">
          <div>
            <FiUser className="text-xl text-white hover:text-textDesignColor cursor-pointer duration-300" />
          </div>
        </Link>
        {/* Shopping Icon */}
        <div className="relative">
          <FaShoppingCart className="text-xl text-gray-100 hover:text-textDesignColor cursor-pointer duration-300" />{" "}
          <span className="absolute -top-2 -right-1 text-xs w-3.5 h-3.5 rounded-full bg-textDesignColor text-black flex items-center justify-center">
            0
          </span>
        </div>
      </div>
      {/* =================== Right End here ====================== */}
    </div>
  );
};

export default Header;
