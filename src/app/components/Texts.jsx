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

    // تب فعال رو داخل کانتینر افقی ببریم
    const btn = containerRef.current.children[index];
    btn?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  // فعال کردن دکمه هنگام اسکرول کاربر
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset برای sticky
      const currentIndex = refs.current.findIndex((ref, idx) => {
        const top = ref.offsetTop;
        const bottom = top + ref.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      });
      if (currentIndex !== -1 && currentIndex !== activeIndex) {
        setActiveIndex(currentIndex);

        // تب فعال رو داخل کانتینر افقی ببریم
        const btn = containerRef.current.children[currentIndex];
        btn?.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section>
      <div>
        {/* دکمه‌ها */}
        <div
          className="flex space-x-4 px-2 overflow-x-auto hide-scrollbar text-lg top-3 sticky w-full py-2 z-10 bg-white/50 backdrop-blur-md"
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
