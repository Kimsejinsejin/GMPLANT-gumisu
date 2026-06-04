"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "피부 본연의 건강함을 찾아서",
    subtitle: "GUMISU 베스트셀러 컬렉션",
    bg: "bg-slate-200",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2000&auto=format&fit=crop", // Placeholder image 1
  },
  {
    id: 2,
    title: "수분을 가득 머금은 촉촉함",
    subtitle: "아쿠아 카밍 라인 신제품 출시",
    bg: "bg-teal-100",
    img: "https://images.unsplash.com/photo-1615397323625-f37b98d4db7a?q=80&w=2000&auto=format&fit=crop", // Placeholder image 2
  },
  {
    id: 3,
    title: "비건 라이프스타일의 시작",
    subtitle: "자연을 담은 순한 처방",
    bg: "bg-cream-50",
    img: "https://images.unsplash.com/photo-1556228720-192b61cc8b61?q=80&w=2000&auto=format&fit=crop", // Placeholder image 3
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].img})` }}
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl font-medium mb-4 tracking-wide"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {slides[current].title}
            </motion.h2>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10 px-8 py-3 bg-white text-gray-900 text-sm font-semibold hover:bg-teal-axis hover:text-white transition-colors duration-300"
            >
              자세히 보기
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress / Pagination */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              current === idx ? "bg-teal-axis" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
