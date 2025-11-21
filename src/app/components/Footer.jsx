"use client";

import React from "react";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
import items from "../data";

const socialLinks = [
  { icon: FaPhoneFlip, href: "tel:09123456789", color: "text-amber-600" },
  {
    icon: FaTelegram,
    href: "https://t.me/fronthooks_support",
    color: "text-blue-600",
  },
  {
    icon: IoLogoWhatsapp,
    href: "https://wa.me/09123456789",
    color: "text-green-800",
  },
  {
    icon: RiInstagramFill,
    href: "https://www.instagram.com/yourprofile",
    color: "text-rose-500",
  },
];

export default function Footer() {
  return (
    <footer className=" bg-gray-200 rounded-t-3xl mt-10 text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* توضیحات کوتاه */}
        <div className="mb-8 text-center sm:text-start">
          <h2 className="text-blue-900 font-bold text-lg mb-4">
            آکادمی آنلاین فرانت هوکس، دوره‌های کوچ محور{" "}
            <strong>برنامه نویسی وب</strong>
          </h2>
          <p className="leading-5 text-right text-sm md:leading-7 mt-2">
            {" "}
            ارائه آموزشی کاربردی، پروژه محور در کنار مربی هدف اصلی ماست. ابتدا
            در یک مسیر یادگیری دقیق قرار می‌گیرید. در این مسیر همه آموزش‌ها با
            وسواس خاصی طراحی شده‌اند به گونه‌ای که مفاهیم برنامه نویسی را در طی
            پروژه‌های متنوع به خوبی درک کنید. در طی مسیر شما قطعا تنها نخواهید
            بود، بلکه مربی کارآزموده در کنارتان هست تا خیالتان از بابت مشکلات
            فنی و مشاوره‌ای راحت باشد. زمان شما برای ما مهم است و می‌خواهیم بدون
            سعی و خطا در کمترین زمان ممکن به بازار کار برسید. علاوه بر این،
            پشتیبانی دوره‌ها مادام العمر است و برای همیشه به سوالات شما پاسخ
            داده می‌شود. این یعنی خلق یک تجربه خوب در یک مسیر مشخص به همراه مربی
            و پشتیبان.{" "}
          </p>
        </div>
        <hr />
        {/* آیکون های شبکه های اجتماعی */}
        <ul className="flex justify-evenly gap-6 items-center my-6">
          {socialLinks.map(({ icon: Icon, href, color }, index) => (
            <li key={index}>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                <Icon
                  size={30}
                  className={`${color} hover:scale-110 transition-transform`}
                />
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        {/* ستون ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {/* ستون دوره‌ها */}
          <div>
            <h3 className="font-bold text-lg mb-2">دسترسی سریع </h3>
            <span className="block w-15 h-1 bg-cyan-700 mb-4 rounded"></span>
            <ul className="space-y-2 text-sm text-gray-700">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="hover:text-cyan-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون اطلاعات تماس */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">اطلاعات تماس</h3>
            <span className="block w-15 h-1 bg-cyan-700 mb-4 rounded"></span>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="#">
                  آدرس: تهران، خیابان ولیعصر، کوچه طراحان سایت، پلاک 1
                </Link>
              </li>
              <li>
                <Link href="tel:3456323">تلفن: 3456323</Link>
              </li>
              <li>
                <Link href="mailto:info@yoursite.com">
                  ایمیل: info@yoursite.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="md:flex justify-center gap-4 mt-10 border-t border-gray-600 pt-4 text-center text-xs">
          <div>
            ارائه شده توسط تیم طراحی سایت{" "}
            <Link
              href="http://multiwb.com"
              target="_blank"
              className="text-cyan-600"
            >
              مولتی وب
            </Link>
          </div>
          © 2025 فروشگاه پوشاک زمستانی زیبا | تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}
