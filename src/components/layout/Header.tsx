"use client";

import { Search, ShoppingBag, User, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
      {/* Top Banner */}
      <div className="w-full bg-teal-axis text-white text-xs py-1.5 text-center font-medium">
        신규 가입 시 5,000원 할인 쿠폰 즉시 지급!
      </div>

      {/* Main Nav */}
      <div
        className={twMerge(
          clsx(
            "w-full transition-all duration-300 ease-in-out border-b border-transparent",
            isScrolled
              ? "bg-white/80 backdrop-blur-md border-gray-200 shadow-sm py-3"
              : "bg-transparent py-5"
          )
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button aria-label="Menu">
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-800">
              <Link href="#" className="hover:text-teal-axis transition">
                ABOUT
              </Link>
              <Link href="#" className="hover:text-teal-axis transition">
                SHOP
              </Link>
              <Link href="#" className="hover:text-teal-axis transition">
                COMMUNITY
              </Link>
              <Link href="#" className="hover:text-teal-axis transition">
                EVENT
              </Link>
            </nav>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/" className="text-3xl font-serif tracking-widest font-bold text-teal-axis">
              GUMISU
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-gray-800 hover:text-teal-axis transition">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="User" className="text-gray-800 hover:text-teal-axis transition hidden md:block">
              <User className="w-5 h-5" />
            </button>
            <button aria-label="Cart" className="text-gray-800 hover:text-teal-axis transition relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-teal-axis text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
