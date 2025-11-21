"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // آیکون فلش
export default function Navbar({ menu, setMenu }) {
  const [score, setScore] = useState(0);
  const [openCategories, setOpenCategories] = useState(false); // کنترل باز/بسته شدن زیرمنو
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
        setOpenCategories(false); // بستن زیرمنو هنگام کلیک بیرون
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenu]);

  const links = [
    { to: "/", label: "صفحه اصلی" },
        { to: "/#introduction", label: "دوره فرانت اند" },

    { to: "/#feature", label: "ویزگی های دوره" },
    { to: "/#accordion1", label: " سرفصل ها" },
        { to: "/#singin", label: "ثبت نام" },

  ];

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
            {links.map((item, idx) => {
              const isActive = pathname === item.to;

              // اگر زیرمنو دارد
              if (item.children) {
                return (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => setOpenCategories(!openCategories)}
                      className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-sm font-[Vazir] font-semibold tracking-tight transition-all duration-200 ${
                        openCategories
                          ? "bg-cyan-200 text-cyan-700 shadow-inner"
                          : "text-gray-700 hover:bg-cyan-50"
                      }`}
                    >
                      {item.label}
                      {openCategories ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {openCategories && (
                      <div className="flex flex-col pr-4 mt-1">
                        {item.children.map((child, cidx) => (
                          <Link
                            key={cidx}
                            href={child.to}
                            onClick={() => setMenu(false)}
                            className="block px-4 py-2 text-gray-700 text-sm rounded-lg hover:bg-cyan-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.to}
                  onClick={() => setMenu(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-[Vazir] font-semibold tracking-tight transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-200 text-cyan-700 shadow-inner"
                      : "text-gray-700 hover:bg-cyan-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
