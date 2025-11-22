// "use client";

// import * as Accordion from "@radix-ui/react-accordion";
// import { motion } from "framer-motion";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

// const items = [
//   {
//     title: "ورکشاپ کاریابی چیه؟",
//     content:
//       "مهم ترین هدف یادگیری یک مهارت کسب درآمد هست. بنابراین، در این بوت کمپ بعد از اتمام فاز آموزش، با برنامه ریزی دقیق کنارتون هستیم تا به صورت اصولی از لینکدین شبکه سازی کنید تا بتوانید اولین کارتون رو پیدا کنید.",
//   },
//   {
//     title: "تفاوت بوت کمپ با دوره ها چیه؟",
//     content:
//       "در بوت کمپ جدای از محتوای دوره ها، برنامه ریزی دقیق روزانه دارید، هر هفته یک کلاس آنلاین مرور و تدریس مجدد مطالب هفته قبلی برگزار میشه و هم چنین در گروه های اختصاصی در کنار استاد و منتورها جلو میرید. علاوه بر این؛ فرآیند منتورینگ، آزمون های میان دوره، پایان دوره و گزارش نویسی روزانه کمک میکنه که به صورت منظم آموزش ببینید و پیشرفت کنید.",
//   },
//   {
//     title: "محتوای آموزشی بوت کمپ چیه؟",
//     content:
//       "تمام دوره های فرانت اند شامل دوره طراحی وب رسپانسیو، جاوااسکریپت، تیلویند، ریکت و نکست رو خواهید داشت. بر اساس این آموزش ها جلو میریم. همچنین دوره تایپ اسکریپت به همه دانشجویان به عنوان هدیه تقدیم میشه.",
//   },
//   {
//     title: "آیا پیش نیازی داره؟ لازمه چیزی رو از قبل بلد باشیم؟",
//     content:
//       "من از شما فقط یه لپ تاپ و اینترنت رو در کنار پشتکار خوب میخوام. انتظار دارم روزی حداقل دو ساعت وقت مفید برای آموزش داشته باشید. قراره که از صفر شروع  کنید و نیاز به هیچ دانش قبلی از برنامه نویسی نیست",
//   },
//   {
//     title: "روزی چقدر زمان باید بگذاریم؟",
//     content:
//       "هر چقدر بیشتر زمان بگذارید، بهتره. حداقل روزی 2-3 ساعت مفید زمان لازمه.",
//   },
//   {
//     title: "برای دانشجویان قبلی هم مفیده؟",
//     content:
//       "بله، قطعاً. با ثبت‌نام در بوت‌کمپ، شما به تمام دوره‌های فرانت دسترسی خواهید داشت و هزینه‌ی دوره‌هایی که قبلاً تهیه کرده‌اید از مبلغ اصلی بوت‌کمپ کسر می‌شود. علاوه بر این، به تمام دوره‌ها به‌صورت دائمی، کلاس‌های هفتگی، برنامه‌روزانه، منتورینگ و آزمون‌های میان‌دوره و پایان‌دوره هم دسترسی خواهید داشت.",
//   },

//   {
//     title: "هزینه بوت کمپ شامل چیه؟",
//     content:
//       "هزینه بوت کمپ کمی بیشتر از مجموع هزینه دوره هاست. در فرآیند بوت کمپ از کلاس های هفتگی آنلاین، منتورینگ نه ماهه، برنامه دقیق هفتگی و روزانه ، آزمون های میان دوره و پایان دوره و همچنین دسترسی دائمی به تمام دوره های روی سایت بهره مند خواهید شد.",
//   },
// ];

// export default function Faq() {
//   return (
//     <div className="w-[90vw] max-w-2xl mx-auto mt-10 ">
//       <h2 id="headlines" className="text-2xl font-black mb-3">
//         سوالات متداول
//       </h2>

//       <Accordion.Root type="single" collapsible>
//         {items.map((item, idx) => (
//           <Accordion.Item
//             key={idx}
//             value={`item-${idx}`}
//             className="border-1 border-gray-200 mb-2 rounded-2xl overflow-hidden "
//           >
//             <Accordion.Header>
//               <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-3 bg-white font-bold text-sm lg:text-base focus:outline-none">
//                 <div className="flex justify-center items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     class="w-5 h-5 ml-1"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-width="1.125"
//                       d="M6.713 15.485a5.634 5.634 0 0 1-4.198-4.198 10.015 10.015 0 0 1 0-4.574 5.634 5.634 0 0 1 4.198-4.198 10.015 10.015 0 0 1 4.574 0 5.634 5.634 0 0 1 4.198 4.198 10.01 10.01 0 0 1 0 4.574 5.634 5.634 0 0 1-4.198 4.198 10.01 10.01 0 0 1-4.574 0Z"
//                     ></path>
//                     <circle
//                       cx="9"
//                       cy="11.625"
//                       r="0.75"
//                       fill="currentColor"
//                     ></circle>
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="1.125"
//                       d="M7.5 7.5v-.375a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5v.091c0 .422-.168.827-.466 1.125L9 9.375"
//                     ></path>
//                   </svg>
//                   <span className="text-gray-700">{item.title}</span>
//                 </div>
//                 <ChevronDownIcon className="w-4 h-4 text-black transition-transform duration-300 ease-in-out radix-state-open:rotate-180" />
//               </Accordion.Trigger>
//             </Accordion.Header>
//             <Accordion.Content asChild>
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: "auto" }}
//                 transition={{ duration: 0.25 }}
//                 className="px-4 py-3 text-sm lg:text-base text-gray-600  leading-6 lg:leading-8 bg-white"
//               >
//                 {item.content}
//               </motion.div>
//             </Accordion.Content>
//           </Accordion.Item>
//         ))}
//       </Accordion.Root>
//     </div>
//   );
// }
"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const items = [
  {
    title: "ورکشاپ کاریابی چیه؟",
    content:
      "مهم ترین هدف یادگیری یک مهارت کسب درآمد هست. بنابراین، در این بوت کمپ بعد از اتمام فاز آموزش، با برنامه ریزی دقیق کنارتون هستیم تا به صورت اصولی از لینکدین شبکه سازی کنید تا بتوانید اولین کارتون رو پیدا کنید.",
  },
  {
    title: "تفاوت بوت کمپ با دوره ها چیه؟",
    content:
      "در بوت کمپ جدای از محتوای دوره ها، برنامه ریزی دقیق روزانه دارید، هر هفته یک کلاس آنلاین مرور و تدریس مجدد مطالب هفته قبلی برگزار میشه و هم چنین در گروه های اختصاصی در کنار استاد و منتورها جلو میرید. علاوه بر این؛ فرآیند منتورینگ، آزمون های میان دوره، پایان دوره و گزارش نویسی روزانه کمک میکنه که به صورت منظم آموزش ببینید و پیشرفت کنید.",
  },
  {
    title: "محتوای آموزشی بوت کمپ چیه؟",
    content:
      "تمام دوره های فرانت اند شامل دوره طراحی وب رسپانسیو، جاوااسکریپت، تیلویند، ریکت و نکست رو خواهید داشت. بر اساس این آموزش ها جلو میریم. همچنین دوره تایپ اسکریپت به همه دانشجویان به عنوان هدیه تقدیم میشه.",
  },
  {
    title: "آیا پیش نیازی داره؟ لازمه چیزی رو از قبل بلد باشیم؟",
    content:
      "من از شما فقط یه لپ تاپ و اینترنت رو در کنار پشتکار خوب میخوام. انتظار دارم روزی حداقل دو ساعت وقت مفید برای آموزش داشته باشید. قراره که از صفر شروع  کنید و نیاز به هیچ دانش قبلی از برنامه نویسی نیست",
  },
  {
    title: "روزی چقدر زمان باید بگذاریم؟",
    content:
      "هر چقدر بیشتر زمان بگذارید، بهتره. حداقل روزی 2-3 ساعت مفید زمان لازمه.",
  },
  {
    title: "برای دانشجویان قبلی هم مفیده؟",
    content:
      "بله، قطعاً. با ثبت‌نام در بوت‌کمپ، شما به تمام دوره‌های فرانت دسترسی خواهید داشت و هزینه‌ی دوره‌هایی که قبلاً تهیه کرده‌اید از مبلغ اصلی بوت‌کمپ کسر می‌شود. علاوه بر این، به تمام دوره‌ها به‌صورت دائمی، کلاس‌های هفتگی، برنامه‌روزانه، منتورینگ و آزمون‌های میان‌دوره و پایان‌دوره هم دسترسی خواهید داشت.",
  },
  {
    title: "هزینه بوت کمپ شامل چیه؟",
    content:
      "هزینه بوت کمپ کمی بیشتر از مجموع هزینه دوره هاست. در فرآیند بوت کمپ از کلاس های هفتگی آنلاین، منتورینگ نه ماهه، برنامه دقیق هفتگی و روزانه ، آزمون های میان دوره و پایان دوره و همچنین دسترسی دائمی به تمام دوره های روی سایت بهره مند خواهید شد.",
  },
];

export default function Faq() {
  return (
    <div className="w-[90vw] max-w-2xl mx-auto mt-10 ">
      <h2 id="headlines" className="text-2xl font-black mb-3 text-[rgb(63,66,100)]">
        سوالات متداول
      </h2>

      <Accordion.Root type="single" collapsible>
        {items.map((item, idx) => (
          <Accordion.Item
            key={idx}
            value={`item-${idx}`}
            className="border border-gray-200 mb-2 rounded-2xl overflow-hidden"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-3 bg-white font-bold text-sm lg:text-base focus:outline-none">
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-5 h-5 ml-1"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="1.125"
                      d="M6.713 15.485a5.634 5.634 0 0 1-4.198-4.198 10.015 10.015 0 0 1 0-4.574 5.634 5.634 0 0 1 4.198-4.198 10.015 10.015 0 0 1 4.574 0 5.634 5.634 0 0 1 4.198 4.198 10.01 10.01 0 0 1 0 4.574 5.634 5.634 0 0 1-4.198 4.198 10.01 10.01 0 0 1-4.574 0Z"
                    ></path>
                    <circle
                      cx="9"
                      cy="11.625"
                      r="0.75"
                      fill="currentColor"
                    ></circle>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.125"
                      d="M7.5 7.5v-.375a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5v.091c0 .422-.168.827-.466 1.125L9 9.375"
                    ></path>
                  </svg>
                  <span className="text-gray-700">{item.title}</span>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-black transition-transform duration-300 ease-in-out radix-state-open:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.25 }}
                className="px-4 py-3 text-sm lg:text-base text-gray-600 leading-6 lg:leading-8 bg-white"
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
