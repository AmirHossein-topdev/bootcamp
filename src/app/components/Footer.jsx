import React from "react";
import {
  FaBullseye,
  FaCreditCard,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
export default function Footer() {
  const footerLinks = [
    {
      title: "بخش های سایت",
      links: [
        { name: " دوره های آموزشی", href: "#" },
        { name: "بلاگ های آموزشی ", href: "#" },
        { name: " درباره ما ", href: "#" },
        { name: "شروع یادگیری ", href: "#" },
      ],
    },
    {
      title: "دوره های آموزشی ",
      links: [
        { name: " دوره متخصص ریکت و ریداکس", href: "/about-us" },
        { name: "  دوره متخصص Next.js", href: "/contact-us" },
        { name: " دوره پیشرفته جاوااسکریپت", href: "#" },
        { name: " دوره پروژه محور تیلویند", href: "#" },
        { name: "  دوره طراحی وب رسپانسیو", href: "#" },
      ],
    },
    {
      title: "اطلاعات تماس",
      links: [
        {
          name: "آدرس: تهران، خیابان ولیعصر، کوچه طراحان سایت، پلاک 1",
          href: "#",
        },
        { name: "تلفن: 3456323", href: "tel:3456323" },
        { name: "ایمیل: info@yoursite.com", href: "mailto:info@yoursite.com" },
      ],
    },
  ];

  return (
    <footer className="bg-[url('/images/snow-bg.png')] bg-cover bg-center bg-white/60 bg-blend-overlay text-gray-900 p-8 ">
      <div className="max-w-6xl mx-auto mt-16 md:mt-5">
        {/* text */}
        <div>
          <h2 className="text-primary font-bold text-xs sm:text-sm mb-4">
            آکادمی آنلاین فرانت هوکس، دوره‌های کوچ محور
            <strong>برنامه نویسی وب</strong>
          </h2>

          <div className="sm:leading-7 text-xs sm:text-sm leading-5">
            <span>
              <strong>صاحب محمدی هستم، برنامه نویس وب</strong> و مدیر وبسایت
              آموزشی فرانت هوکس.
            </span>

            <p className="leading-5 md:leading-7 mt-2">
              ارائه آموزشی کاربردی، پروژه محور در کنار مربی هدف اصلی ماست. ابتدا
              در یک مسیر یادگیری دقیق قرار می‌گیرید. در این مسیر همه آموزش‌ها با
              وسواس خاصی طراحی شده‌اند به گونه‌ای که مفاهیم برنامه نویسی را در
              طی پروژه‌های متنوع به خوبی درک کنید. در طی مسیر شما قطعا تنها
              نخواهید بود، بلکه مربی کارآزموده در کنارتان هست تا خیالتان از بابت
              مشکلات فنی و مشاوره‌ای راحت باشد. زمان شما برای ما مهم است و
              می‌خواهیم بدون سعی و خطا در کمترین زمان ممکن به بازار کار برسید.
              علاوه بر این، پشتیبانی دوره‌ها مادام العمر است و برای همیشه به
              سوالات شما پاسخ داده می‌شود. این یعنی خلق یک تجربه خوب در یک مسیر
              مشخص به همراه مربی و پشتیبان.
            </p>

            <p className="leading-5 md:leading-7 mt-2">
              شما می‌توانید از طریق
              <a
                href="https://www.instagram.com/sahebmohamadi.ir/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                اینستاگرام
              </a>
              ،
              <a
                href="https://t.me/fronthooks_support"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                تلگرام
              </a>
              ، یا
              <a
                href="https://ir.linkedin.com/in/saheb-mohamadi-227ab4112"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600"
              >
                لینکدین
              </a>
              با من در ارتباط باشید.
            </p>
          </div>
        </div>
        {/* socials */}
        <ul className="flex justify-center gap-6 items-center my-6">
          <li>
            <a href="tel:09123456789">
              <FaPhoneFlip
                size={30}
                className="text-amber-600 hover:scale-110 transition-transform"
              />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/fronthooks_support"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram
                size={30}
                className="text-blue-600 hover:scale-110 transition-transform"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/09123456789"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp
                size={30}
                className="text-green-800 hover:scale-110 transition-transform"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill
                size={30}
                className="text-rose-500 hover:scale-110 transition-transform"
              />
            </a>
          </li>
        </ul>

        {/* ستون‌ها */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className={
                section.title === "اطلاعات تماس" ? "md:col-span-2" : ""
              }
            >
              <h3 className="font-bold text-lg mb-2">{section.title}</h3>
              <span className="block w-15 h-1 bg-cyan-700 mb-4 rounded"></span>
              <ul
                className={`space-y-2 text-sm list-disc list-inside text-gray-400 ${
                  section.title === "اطلاعات تماس" ? "whitespace-nowrap" : ""
                }`}
              >
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-blue-600 transition text-gray-700"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* کپی رایت پایین */}
        <div className="md:flex justify-center gap-4 mt-10 border-t border-gray-600 pt-4 text-center text-xs">
          <div className="">
            اراعه شده توسط تیم طراحی سایت{" "}
            <a
              href="http://multiwb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600"
            >
              مولتی وب
            </a>
          </div>
          © 2025 فروشگاه پوشاک زمستانی زیبا | تمامی حقوق محفوظ است
        </div>
      </div>
    </footer>
  );
}
