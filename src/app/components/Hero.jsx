"use client";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        w-[90vw] mx-auto my-3 mt-7
        md:flex md:justify-evenly md:items-center
        bg-[url('https://fronthooks.ir/images/grid-pattern.svg')]
        bg-repeat
        bg-center
        bg-[length:40px_40px]
        relative
        overflow-hidden
      "
    >
      <div className="">
        <h2 className="font-extrabold text-xl text-blue-900 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              stroke="#363853"
              strokeWidth="1.5"
              d="M12 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z"
            ></path>
            <path
              stroke="#363853"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 12h-3M3 12h3m6 9v-3m0-15v3m0-3v3m0 15v-3"
            ></path>
          </svg>
          بوت کمپ جامع فرانت اند + ورکشاپ کاریابی
        </h2>
       <h3 className="mt-4 font-black text-[1.7rem] text-[rgb(63,66,100)] my-3">
  از صفر تا استخدام؛ یادگیری از جنس تجربه!
</h3>

        <p className="font-light text-base  leading-7 text-[rgb(106,108,135)]">
  برنامه روزانه و منتورینگ تا استخدام، پروژه‌های واقعی، کلاس‌های آنلاین
  هفتگی، ورکشاپ کاریابی و پولسازی از لینکدین
</p>







<div className="rtl flex justify-start text-sm text-[rgb(106,108,135)] my-5 mb-8 gap-6">

  <div className="flex items-center gap-2">
    <img
      src="/images/clock.svg"
      alt="clock"
      width={25}
      className="icon-colored"
    />
    ۱۶۰ ساعت
  </div>

  <div className="relative flex items-center gap-2 px-4">
    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-px bg-[rgb(106,108,135)] opacity-40"></span>

    <img
      src="/images/callender.svg"
      alt="calendar"
      width={25}
      className="icon-colored"
    />
    ۳۶ هفته

    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-[rgb(106,108,135)] opacity-40"></span>
  </div>

  <div className="flex items-center gap-2">
    <img
      src="/images/winter.svg"
      alt="winter"
      width={25}
      className="icon-colored"
    />
    زمستان ۱۴۰۴
  </div>

</div>





       <Link
  href="#introduction"
  className="bg-gradient-to-tl from-[#4B6EFF] to-[#6E8AFF] 
             mt-10 px-6 py-3 ml-10 rounded-3xl 
             text-white font-extrabold text-lg
             shadow-[0_0_20px_rgba(75,110,255,0.6)] 
             transition-all duration-300 hover:shadow-[0_0_25px_rgba(75,110,255,0.8)]"
>
  بزن بریم!
</Link>

      </div>

      <div className="">
        <div className="mx-auto">
          <img
            src="/images/banner.webp"
            alt="banner"
            className="size-100 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
