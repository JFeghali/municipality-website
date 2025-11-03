"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* 🔹 Sticky Header */}
      <header
        dir="rtl"
        className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
      >
        {/* 🔹 Top Header */}
        <div className="bg-green-800 text-white py-3">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Social + Search */}
            <div className="flex items-center gap-4">
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://www.facebook.com/Hazmieh-Municipality-212556075513775"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-gray-300 transition" />
                </a>
                <a
                  href="https://twitter.com/munihazmieh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-gray-300 transition" />
                </a>
                <a
                  href="https://www.youtube.com/user/hazmiehmunicipality"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="hover:text-gray-300 transition" />
                </a>
              </div>

              {/* Search toggle button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center text-white text-2xl"
              >
                {showSearch ? <FaTimes /> : <FaSearch />}
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Search Bar */}
        {showSearch && (
          <div className="bg-gray-100 border-t border-b border-gray-200 py-3">
            <div className="container mx-auto px-4">
              <form
                action="#"
                method="get"
                className="flex justify-center"
                dir="rtl"
              >
                <input
                  type="text"
                  placeholder="ابحث في الموقع..."
                  className="w-full sm:w-1/2 border border-gray-300 rounded-r-md p-3 focus:outline-none text-right text-lg"
                />
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 rounded-l-md hover:bg-green-800 transition text-lg"
                >
                  بحث
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 🔹 Logo */}
        <div className="py-4 px-6 flex justify-start items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-28 h-auto object-contain"
            />
          </Link>
        </div>

        {/* 🔹 Main Menu */}
        <nav className="bg-green-800 text-white font-bold text-2xl w-full">
          <div className="px-8">
            <ul className="flex flex-wrap justify-center gap-16 py-5">
              <li>
                <Link
                  href="/council"
                  className="hover:text-yellow-300 transition"
                >
                  البلدية
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-yellow-300 transition"
                >
                  الأخبار والإعلانات
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-yellow-300 transition"
                >
                  المشاريع المجتمعية
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-300 transition"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* 🔹 Add spacing to prevent content overlap */}
      <div className="pt-[230px]"></div> {/* Adjust height to match your header */}
    </>
  );
}
