"use client";
import { useRef, useState, useEffect } from "react";
import items from "../data";
export default function Texts() {
  const refs = useRef([]);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // اسکرول به بخش مربوطه هنگام کلیک
  const scrollTo = (index) => {
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveIndex(index);
  };

  // sections اصلی + اضافه کردن یک section برای Accordion
  const sections = [
    { id: "introduction", title: "معرفی" },
    { id: "feature1", title: "نیازمندی‌ها" },
    { id: "feature2", title: "ویژگی‌ها" },
    { id: "accordion", title: "سر فصل‌ها" }, // ← این اضافه شد
  ];
  // فعال کردن دکمه هنگام اسکرول کاربر
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset برای sticky
      const currentIndex = refs.current.findIndex((ref, idx) => {
        const top = ref.offsetTop;
        const bottom = top + ref.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });
      if (currentIndex !== -1) setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="">
      <div className="">
        {/* دکمه‌ها */}
        <div
          className="flex space-x-4 px-2 overflow-x-auto hide-scrollbar top-10 sticky w-full py-2 bg-white z-10"
          ref={containerRef}
        >
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollTo(idx)}
              className={`flex-shrink-0 px-4 py-2 font-medium transition-colors ${
                activeIndex === idx
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:border-b-2 hover:border-blue-600"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Content blocks */}
        <div className="mt-6 space-y-12 w-[85vw] mx-auto">
          {items.map((item, idx) => (
            <div key={item.id} ref={(el) => (refs.current[idx] = el)}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
