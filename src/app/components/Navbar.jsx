"use client";

import { useState, useEffect, useRef } from "react";
import items from "../data";

export default function Navbar({ menu, setMenu }) {
  const menuRef = useRef(null);
  const [active, setActive] = useState(items[0].id);

  // -------------------------------
  // اسکرول نرم به سکشن
  // -------------------------------
  const handleClick = (id) => {
    setActive(id);
    setMenu(false);

    const el = document.getElementById(id);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - 120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  // -------------------------------
  // تشخیص سکشن فعال هنگام اسکرول
  // -------------------------------
  useEffect(() => {
    const handleScroll = () => {
      let current = active;

      items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight / 2) {
          current = item.id;
        }
      });

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  // -------------------------------
  // بستن منو وقتی کلیک خارج شد
  // -------------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenu]);

  return (
    <>
      {menu && (
        <div
          className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-[2px] md:hidden"
          onClick={() => setMenu(false)}
        />
      )}

      <aside
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-gradient-to-br from-cyan-100 via-white to-cyan-50 shadow-2xl rounded-l-3xl z-[99] p-6 transition-all duration-500 ease-in-out flex flex-col justify-between md:hidden ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-cyan-500 tracking-tight">
              فروشگاه X
            </h2>
            <p className="text-xs text-gray-500 mt-1">فروشگاه لباس زمستانی</p>
          </div>

          <nav dir="rtl" className="flex flex-col gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`block px-4 py-2 rounded-lg text-sm font-[Vazir] font-semibold tracking-tight transition-all duration-200 text-right ${
                  active === item.id
                    ? "bg-cyan-200 text-cyan-700 shadow-inner"
                    : "text-gray-700 hover:bg-cyan-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
