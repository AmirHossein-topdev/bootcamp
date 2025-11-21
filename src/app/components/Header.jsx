"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LuCircleUser } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { BsBasket } from "react-icons/bs";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

export default function Header() {
  const [text] = useTypewriter({
    words: ["بوت کمپ زمستان ❄️۱۴۰۴ ، در حال ثبت نام 😍"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [menu, setMenu] = useState(false);
  const [userBox, setUserBox] = useState(false);
  const [cartBox, setCartBox] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  const userBoxRef = useRef(null);
  const userIconRef = useRef(null);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  const pathname = usePathname();

  // helper: خواندن user از localStorage
  const getCurrentUserFromStorage = () => {
    try {
      const savedCurrent = localStorage.getItem("currentUser");
      if (savedCurrent) return JSON.parse(savedCurrent);

      const loggedIn = localStorage.getItem("loggedIn");
      const usersStr = localStorage.getItem("users");
      if (loggedIn === "true" && usersStr) {
        const usersArr = JSON.parse(usersStr);
        if (Array.isArray(usersArr) && usersArr.length > 0) {
          // نمایش آخرین کاربر ثبت‌شده (یا می‌توانید معیار دیگری بگذارید)
          return usersArr[usersArr.length - 1];
        }
      }
    } catch (err) {
      console.error("error parsing user from storage", err);
    }
    return null;
  };

  const getCartFromStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  };

  // بارگذاری اولیه یوزر و سبد خرید
  useEffect(() => {
    setCurrentUser(getCurrentUserFromStorage());
    setCart(getCartFromStorage());
  }, []);

  // وقتی userBox یا cartBox باز/بسته میشه، کلیک بیرون رو درست هندل کن
  useEffect(() => {
    const handleClickOutside = (e) => {
      // اگر userBox باز است و کلیک خارج از آیکن و باکس بود -> ببند
      if (userBox) {
        const clickedInsideUserBox =
          userBoxRef.current && userBoxRef.current.contains(e.target);
        const clickedOnUserIcon =
          userIconRef.current && userIconRef.current.contains(e.target);
        if (!clickedInsideUserBox && !clickedOnUserIcon) {
          setUserBox(false);
        }
      }

      // اگر cartBox باز است و کلیک خارج از آیکن و باکس بود -> ببند
      if (cartBox) {
        const clickedInsideCartBox =
          cartRef.current && cartRef.current.contains(e.target);
        const clickedOnCartIcon =
          cartIconRef.current && cartIconRef.current.contains(e.target);
        if (!clickedInsideCartBox && !clickedOnCartIcon) {
          setCartBox(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [userBox, cartBox]);

  // تابع toggle برای userBox — وقتی باز می‌کنیم، user را تازه‌سازی می‌کنیم
  const toggleUserBox = () => {
    setUserBox((prev) => {
      const next = !prev;
      if (next) {
        setCurrentUser(getCurrentUserFromStorage());
      }
      return next;
    });
    // وقتی باز userBox می‌کنیم، cartBox رو ببند
    setCartBox(false);
  };

  // تابع toggle برای cartBox — وقتی باز می‌کنیم از localStorage تازه‌سازی می‌کنیم
  const toggleCartBox = () => {
    setCartBox((prev) => {
      const next = !prev;
      if (next) {
        setCart(getCartFromStorage());
      }
      return next;
    });
    // وقتی باز cart باز شد، userBox رو ببند
    setUserBox(false);
  };

  // تغییر تعداد محصول
  const changeQty = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // حذف محصول
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // اگه خواستی می‌تونی Swal اطلاع حذف هم بندازی:
    // Swal.fire({ icon: "success", title: "حذف شد", timer: 1200, showConfirmButton: false });
  };

  // مجموع قیمت
  const totalPrice = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.qty || 1),
    0
  );

  // خروج (logout)
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("Users");
    localStorage.removeItem("cart");
    setCurrentUser(null);
    setUserBox(false);
    // اگر می‌خواهی کاربر رو به صفحه اصلی ببری:
    window.location.href = "/";
  };

  return (
    <header className="bg-white relative z-[100] pb-4 border-b-1 ">
      {/* نوار بالای صفحه */}
      <section className=" bg-gradient-to-tl from-[#4B6EFF] to-[#6E8AFF] flex items-center justify-center text-white text-center text-sm md:text-[15px] p-2 md:mx-auto cursor-pointer">
        <span className="flex items-center">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </span>
      </section>

      {/* هدر اصلی */}
      <section className="flex justify-between items-center w-[85vw] mx-auto mt-2 text-black">
        <span
          className="p-1 px-3 rounded-2xl flex items-center text-sm gap-1 cursor-pointer md:hidden"
          onClick={() => setMenu(true)}
        >
          <HiOutlineBars3BottomRight size={30} />
        </span>

        <h1 className="font-bold text-lg md:order-1 md:ml-0">
          <a href="/">
            <img
              src="/images/main-icon.svg"
              alt="icon"
              className="text-blue-400"
            />
          </a>
        </h1>

        <nav className="hidden md:flex gap-4 items-center justify-center flex-1 order-2">
          {pathname.includes("/panel")
            ? [
                { to: "/panel", label: "پنل کاربری" },
                { to: "/panel/details", label: "اطلاعات تکمیلی" },
                { to: "/panel/orders", label: "سفارشات من" },
                { to: "/", label: "صفحه اصلی سایت" },
              ].map((item, idx) => {
                const isActive = pathname.includes(item.to);
                return (
                  <a
                    key={idx}
                    href={item.to}
                    className={`relative text-gray-700 font-semibold hover:text-cyan-600 transition-colors ${
                      isActive ? "text-cyan-600" : ""
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-[-4px] left-0 w-full h-[3.5px] bg-cyan-500 rounded"></span>
                    )}
                  </a>
                );
              })
            : [
                { to: "/", label: "صفحه اصلی" },
                { to: "/products", label: "فروشگاه" },
                { to: "/blog", label: "مقالات" },
                { to: "/contact-us", label: "تماس باما" },
                { to: "/about-us", label: "درباره ما" },
              ].map((item, idx) => {
                const isActive = pathname === item.to;
                return (
                  <a
                    key={idx}
                    href={item.to}
                    className={`relative text-gray-700 font-semibold hover:text-cyan-600 transition-colors ${
                      isActive ? "text-cyan-600" : ""
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-[-4px] left-0 w-full h-[3.5px] bg-cyan-500 rounded"></span>
                    )}
                  </a>
                );
              })}
        </nav>

        {/* آیکن کاربر + سبد خرید */}
        <span className="relative flex justify-between items-center gap-0 md:order-3">
          {/* User (wrapper با ref برای تشخیص کلیک) */}
          <div ref={userIconRef} className="relative">
            <button
              onClick={toggleUserBox}
              aria-label="کاربری"
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <LuCircleUser size={24} className="cursor-pointer" />
            </button>

            {userBox && (
              <div
                ref={userBoxRef}
                className="absolute top-7 left-5 w-44 bg-white shadow-lg rounded-lg p-3 border border-gray-200 z-50"
              >
                {currentUser ? (
                  <div className="flex flex-col gap-2 text-center">
                    <span className="font-bold text-gray-700">
                      {currentUser.name}
                    </span>
                    <a
                      href="/panel"
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      پنل کاربری
                    </a>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-500 hover:underline"
                    >
                      خروج
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 text-center">
                    <a
                      href="/login"
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      ورود
                    </a>
                    <a
                      href="/register"
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      ثبت‌نام
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart (wrapper با ref برای تشخیص کلیک) */}
          <div ref={cartIconRef} className="relative">
            <button
              onClick={toggleCartBox}
              aria-label="سبد خرید"
              className="p-1 rounded-full hover:bg-gray-100 relative"
            >
              <BsBasket size={24} className="cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((acc, item) => acc + (item.qty || 1), 0)}
                </span>
              )}
            </button>

            {cartBox && (
              <div
                ref={cartRef}
                className="absolute top-10 left-5 w-72 bg-white shadow-lg rounded-lg p-3 border border-gray-200 z-50"
              >
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center">
                    سبد خرید خالی است
                  </p>
                ) : (
                  <div className="flex flex-col gap-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 border-b pb-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 text-sm">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500">
                            {Number(item.price).toLocaleString()} تومان
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => changeQty(item.id, -1)}
                            className="text-xs bg-gray-200 px-1 rounded"
                          >
                            -
                          </button>
                          <span className="text-xs">{item.qty || 1}</span>
                          <button
                            onClick={() => changeQty(item.id, 1)}
                            className="text-xs bg-gray-200 px-1 rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 text-xl"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="border-t pt-2 text-right font-bold text-sm">
                      مجموع: {totalPrice.toLocaleString()} تومان
                    </div>
                    <div className="mt-2 flex gap-2">
                      <a
                        href="/panel/orders"
                        className="flex-1 text-center py-2 rounded bg-sky-600 text-white"
                      >
                        رفتن به سبد
                      </a>
                      <a
                        href="/panel/orders"
                        onClick={() => {
                          if (cart.length === 0) {
                            Swal.fire({
                              icon: "info",
                              title: "سبد خالی است",
                              timer: 1200,
                              showConfirmButton: false,
                            });
                            return;
                          }
                          Swal.fire({
                            icon: "success",
                            title: "ادامه خرید",
                            text: "در حال انتقال...",
                            timer: 900,
                            showConfirmButton: false,
                          }).then(() => {
                            window.location.href = "/checkout";
                          });
                        }}
                        className="flex-1 text-center py-2 rounded border"
                      >
                        پرداخت
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </span>
      </section>

      <Navbar menu={menu} setMenu={setMenu} />
    </header>
  );
}
