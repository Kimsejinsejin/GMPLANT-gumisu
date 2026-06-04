"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "다크 스팟 콜렉팅 글로우 세럼",
    price: 28000,
    discount: 15,
    tag: "BEST",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop", // placeholder
  },
  {
    id: 2,
    name: "아티초크 인텐시브 스킨 배리어 앰플",
    price: 32000,
    discount: 10,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=600&auto=format&fit=crop", // placeholder
  },
  {
    id: 3,
    name: "데일리 퓨리파잉 트리트먼트 토너",
    price: 22000,
    discount: 0,
    tag: "BEST",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop", // placeholder
  },
  {
    id: 4,
    name: "머그워트 포어 클레리파잉 워시오프 팩",
    price: 25000,
    discount: 20,
    tag: "",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=600&auto=format&fit=crop", // placeholder
  },
];

export default function BestItems() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Category Sidebar */}
        <div className="w-full md:w-1/4">
          <h2 className="text-3xl font-bold mb-6">BEST ITEM</h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            GUMISU 고객님들이<br />
            가장 많이 찾는 베스트 제품을<br />
            만나보세요.
          </p>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li className="text-black font-bold">ALL</li>
            <li className="hover:text-black cursor-pointer transition">SKINCARE</li>
            <li className="hover:text-black cursor-pointer transition">MASK & PACK</li>
            <li className="hover:text-black cursor-pointer transition">CLEANSING</li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-teal-axis text-white text-[10px] font-bold px-2 py-1 tracking-wider">
                    {product.tag}
                  </span>
                )}
                {/* Hover Cart Button */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white p-3 rounded-full hover:bg-teal-axis hover:text-white transition-colors shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1 text-sm">
                <h3 className="text-gray-900 group-hover:text-teal-axis transition-colors font-medium">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  {product.discount > 0 ? (
                    <>
                      <span className="text-teal-axis font-bold">{product.discount}%</span>
                      <span className="font-semibold">
                        {(product.price * (1 - product.discount / 100)).toLocaleString()}원
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        {product.price.toLocaleString()}원
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold">{product.price.toLocaleString()}원</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
