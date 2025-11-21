"use client";
import { useRef, React } from "react";

export default function Hero() {
  return (
    <section className="w-[90vw] mx-auto my-3 mt-7 md:flex md:justify-evenly md:items-center md:gap-">
      <div className="">
        <h2 className="font-extrabold text-xl flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            class="h-5 w-5"
          >
            <path
              stroke="#363853"
              stroke-width="1.5"
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
        <h3 className="mt-4 font-bold text-2xl my-3">
          از صفر تا استخدام؛یادگیری از جنس تجربه!
        </h3>
        <p className="font-light text-sm text-gray-500 ">
          برنامه روزانه و منتورینگ تا استخدام ، پروزه های واقعی ، کلاس های
          انلاین هفتگی ، ورکشاپ کاریابی و پولسازی از لیندکدین
        </p>
        <div className="flex justify-evenly text-sm text-gray-500 my-5 mb-8">
          <div className="flex items-center gap-2">
            <img src="/images/clock.svg" alt="clock" width={25} /> ۱۶۰ ساعت
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/callender.svg" alt="clock" width={25} /> ۳۶ هفته
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/winter.svg" alt="clock" width={25} /> زمستان ۱۴۰۴
          </div>
        </div>
        <a
          href="/"
          className="bg-gradient-to-tl from-[#4B6EFF] to-[#6E8AFF] mt-10 p-2 px-3 rounded-3xl text-white font-bold shadow-xl"
        >
          بزن بریم!
        </a>
      </div>
      <div className="">
        <div className="mx-auto">
          <img
            src="/images/banner.webp"
            alt="banner"
            className="size-70 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
