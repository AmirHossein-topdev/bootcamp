"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LuCircleUser } from "react-icons/lu";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Navbar from "./Navbar";
import items from "../data";

export default function Header() {
  const [text] = useTypewriter({
    words: ["بوت کمپ زمستان ❄️۱۴۰۴ ، در حال ثبت نام 😍"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });
  const [active, setActive] = useState(items[0].id);

  const handleClick = (id) => {
    setActive(id);

    const el = document.getElementById(id);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - 120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

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

      if (current !== active) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const [menu, setMenu] = useState(false);

  const pathname = usePathname();

  return (
    <header className="bg-white relative z-[100] pb-4 border-b-1  ">
      {/* نوار بالای صفحه */}
      <section className=" bg-gradient-to-tl from-[#4B6EFF] to-[#6E8AFF] flex items-center justify-center text-white text-center text-sm md:text-[15px] p-2 md:mx-auto cursor-pointer">
        <span className="flex items-center">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </span>
      </section>

      {/* هدر اصلی */}
      <section className="flex justify-between items-center w-[85vw] mx-auto mt-2 text-[rgb(63,66,100)] ">
        <span
          className="p-1 px-3 rounded-2xl flex items-center text-sm gap-1 cursor-pointer md:hidden"
          onClick={() => setMenu(true)}
        >
          <HiOutlineBars3BottomRight size={30} />
        </span>

       <h1 className="font-bold text-lg md:order-1 md:ml-0">
  <a href="/" className="flex items-center gap-3 md:gap-4">
    <img
      src="/بارگیری-9.svg"
      alt="لوگو آکادمی مولتی وب"
      className="w-10 h-auto md:w-14"
    />
    <span className="text-base md:text-xl font-extrabold leading-tight text-[rgb(63,66,100)] ">
      آکادمی مولتی وب
    </span>
  </a>
</h1>


        <nav className="hidden md:flex gap-4 items-center justify-center flex-1 order-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative text-gray-700 font-semibold hover:text-cyan-600 transition-colors ${
                active === item.id ? "text-cyan-600" : ""
              }`}
            >
              {item.title}
              {active === item.id && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[3.5px] bg-cyan-500 rounded"></span>
              )}
            </button>
          ))}
        </nav>

        <span className="relative flex justify-between items-center gap-0 md:order-3">
          {/* User (wrapper با ref برای تشخیص کلیک) */}
          <div className="relative">
            <button
              aria-label="کاربری"
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <LuCircleUser size={24} className="cursor-pointer" />
            </button>
          </div>
        </span>
      </section>

      <Navbar menu={menu} setMenu={setMenu} />
    </header>
  );
}
