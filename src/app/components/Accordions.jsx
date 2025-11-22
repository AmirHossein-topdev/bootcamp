"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const items = [
  {
    title: "فاز اول: HTML CSS",
    duration: "۴ هفته",
    content:
      "در 4 هفته اول دوره طراحی وب رسپانسیو رو آموزش میبینید. تمام مفاهیم HTML CSS رو به صورت دقیق یاد میگیرید. در طی دوره پروژه ای رو پیاده خواهیم کرد، همچنین دو تا آزمون میان دوره و پایان دوره رو هم خواهیم داشت.",
  },
  {
    title: "فاز دوم: JavaScript",
    duration: "۹ هفته",
    content:
      "در این فاز JS و مفاهیم DOM و API ها را یاد میگیرید و پروژه عملی انجام میدهید.",
  },
  {
    title: "فاز سوم: تیلویند",
    duration: "۴ هفته",
    content:
      "الان وقتشه که دوره تیلویند رو آموزش ببینید و با سرعت بیشتری پروژه ها رو پیاده کنید. نهایتا یه تسک بهتون داده میشه که باید به صورت دقیق پیاده کنید. در پایان این دوره هم، یک آزمون پایان دوره برگزار خواهد شد.",
  },
  {
    title: "فاز چهارم: ریکت",
    duration: "۱۲ هفته",
    content:
      "دوره متخصص ریکت و ریداکس در این مرحله براتون آماده شده تا ریز و درشت ریکت به صورت حرفه ای درک کنید. پروژه های متنوعی رو با بک اند واقعی بر اساس دیزاین پترن ها و best practise ها توسعه خواهیم داد. همچنین یه پروژه رو به عنوان تسک این مرحله باید پیاده سازی کنید تا از دانش شما مطمئن شویم.",
  },
  {
    title: "فاز پنجم: نکست",
    duration: "۹ هفته",
    content:
      "تا این مرحله شما آماده بازار کار هستید! اما به منظور ارتقا دانش شما دوره نکست با پروژه های جامع براتون آماده شده تا به بالاترین سطح دانش از توسعه وب اپلیکیشن های سئو محو شوید. به روال سابق، یه تسک رو باید با نکست پیاده کنید و توسط ما تایید بشه.",
  },
  {
    title: "فاز ششم: کاریابی",
    duration: "۴ هفته",
    content:
      " در پایان بوت کمپ یک رزومه کامل رو خواهید داشت که شامل چندین پروژه جامع و فول استک هست. علاوه بر این، طی فرآیند برنامه ریزی شده در ورکشاپ کاریابی، کنارتون هستیم تا بتوانید سریع و اصولی از لینکدین اولین کارتون رو پیدا کنید. .",
  },
];

export default function Accordions() {
  return (
    <div className="w-[90vw] max-w-2xl mx-auto mt-0 ">
      <h2 id="headlines" className="
font-bold text-[1.8rem] sm:text-2xl mb-5 text-[rgb(63,66,100)] tracking-tight [text-shadow:0_0_1px_rgba(0,0,0,0.3)]      ">
        سر فصل ها و نقشه راه یادگیری
      </h2>
      <p className="text-gray-700 mb-5 text-sm">
        قابل ذکر است که در هر فاز از بوت کمپ، تمام جلسات و سرفصل های مشخص شده
        دوره های روی سایت که در صفحه دوره ها مشخص هست رو آموزش خواهیم داد. عملا
        هیچ پروژه و مفهوم مهمی نیست که از قلم بیوفته.
      </p>
      <Accordion.Root type="single" collapsible>
        {items.map((item, idx) => (
          <Accordion.Item
            key={idx}
            value={`item-${idx}`}
            className="border-1 border-gray-200 mb-2 rounded-2xl overflow-hidden "
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-3 bg-white font-bold text-sm lg:text-base focus:outline-none">
                <span className="text-gray-700">{item.title}</span>
                <div className="flex items-center gap-2 bg-[#EDF0FF] rounded-xl px-2 py-0.5">
                  <span className="bg-[#EDF0FF] text-blue-500 text-xs font-semibold lg:text-sm lg:px-3 lg:py-1">
                    {item.duration}
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-gray-500 transition-transform duration-300 ease-in-out radix-state-open:rotate-180" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.25 }}
                className="px-4 py-3 text-sm lg:text-base text-gray-600  leading-6 lg:leading-8 bg-white"
              >
                {item.content}
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
