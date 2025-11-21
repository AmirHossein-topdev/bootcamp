// "use client";

// import React, { useState } from "react";
// // در پروژه واقعی خودتان این خط را از کامنت خارج کنید
//  import { useRouter } from "next/navigation";
//  import { useSearchParams } from 'next/navigation';

// import { 
//   User, 
//   Phone, 
//   Mail, 
//   ArrowLeft, 
//   ShieldCheck, 
//   CreditCard, 
//   CheckCircle2, 
//   HelpCircle 
// } from "lucide-react";

// export default function PayForm() {
//       const searchParams = useSearchParams();
//   const title = searchParams.get("title");
//   const  amount = searchParams.get("amount");
//    const router = useRouter(); // برای استفاده در نکست جی‌اس
//   const [isLoading, setIsLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // شبیه‌سازی ارسال فرم
//     setTimeout(() => {
//       setIsLoading(false);
//        router.push("/pay/confirm"); // انتقال به صفحه بعد در پروژه واقعی
//       alert("اطلاعات با موفقیت ثبت شد! انتقال به درگاه...");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8   !font-[Vazir]" dir="rtl">
      
//       <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        
//         {/* بخش اطلاعات دوره (سایدبار رنگی) */}
//         <div className="w-full md:w-5/12 bg-gradient-to-br from-cyan-700 to-cyan-900 text-white p-8 relative overflow-hidden flex flex-col justify-between">
//           {/* پترن پس‌زمینه */}
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

//           <div className="relative z-10">
//             <div className="inline-flex items-center gap-2 bg-cyan-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-6 border border-cyan-600/30">
//               <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
//               ظرفیت محدود: ۵ نفر باقی‌مانده
//             </div>
            
//             <h1 className="text-3xl font-bold mb-2 leading-tight">
//               بوت‌کمپ جامع فرانت‌اند
//             </h1>
//             <p className="text-cyan-100 text-lg mb-8">زمستان ۱۴۰۴ - سطح پیشرفته</p>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
//                 <span className="text-sm text-cyan-50/90">پروژه محور با منتورینگ اختصاصی</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
//                 <span className="text-sm text-cyan-50/90">تضمین استخدام نفرات برتر</span>
//               </div>
//               <div className="flex items-start gap-3">
//                 <CheckCircle2 className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
//                 <span className="text-sm text-cyan-50/90">{title} </span>
//               </div>
//             </div>
//           </div>

//           <div className="relative z-10 mt-auto pt-8 border-t border-cyan-700/50">
//             <div className="flex justify-between items-end mb-2">
//               <span className="text-cyan-200 text-sm">مبلغ قابل پرداخت:</span>
//               <div className="text-left">
//                  <span className="text-sm text-cyan-300 line-through decoration-red-400 decoration-2 ml-2 opacity-70">۱۵,۰۰۰,۰۰۰</span>
//                  <span className="text-2xl font-bold text-white">{amount}</span>
//                  <span className="text-xs mr-1 font-light">تومان</span>
//               </div>
//             </div>
//             <div className="bg-cyan-800/50 rounded-lg p-3 text-xs text-cyan-100 flex items-start gap-2">
//                <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-cyan-300" />
//                <p>
//                  لطفا اطلاعات خود را دقیق وارد کنید
//                </p>
//             </div>
//           </div>
//         </div>

//         {/* بخش فرم پرداخت */}
//         <div className="w-full md:w-7/12 p-8 bg-white relative">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
//               <CreditCard className="w-6 h-6 text-cyan-600" />
//               اطلاعات پرداخت‌کننده
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* نام */}
//               <div className="group">
//                 <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5 mr-1">
//                   نام و نام‌خانوادگی
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-600 transition-colors">
//                     <User className="w-5 h-5" />
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="مثال: علی رضایی"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full pr-10 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-800 placeholder:text-slate-400"
//                   />
//                 </div>
//               </div>

//               {/* موبایل */}
//               <div className="group">
//                 <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5 mr-1">
//                   شماره موبایل
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-600 transition-colors">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="0912..."
//                     value={form.phone}
//                     onChange={handleChange}
//                     required
//                     dir="ltr"
//                     className="w-full pr-10 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-800 placeholder:text-slate-400 text-right"
//                   />
//                 </div>
//               </div>

//               {/* ایمیل */}
//               <div className="group">
//                 <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5 mr-1">
//                   آدرس ایمیل
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-600 transition-colors">
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="example@gmail.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     dir="ltr"
//                     className="w-full pr-10 pl-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all text-slate-800 placeholder:text-slate-400 text-right"
//                   />
//                 </div>
//               </div>

//               {/* دکمه پرداخت */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-cyan-200 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
//               >
//                 {isLoading ? (
//                   <span className="flex items-center gap-2">
//                     <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                     در حال پردازش...
//                   </span>
//                 ) : (
//                   <>
//                     <span>پرداخت امن ۱۲,۰۰۰,۰۰۰ تومان</span>
//                     <ArrowLeft className="w-5 h-5" />
//                   </>
//                 )}
//               </button>

//               <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-xs">
//                 <ShieldCheck className="w-4 h-4" />
//                 <span>اطلاعات شما با رمزنگاری امن محافظت می‌شود</span>
//               </div>

//             </form>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import {
  User,
  Phone,
  Mail,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export default function PayForm() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "بدون عنوان";
  const amount = searchParams.get("amount") || "0";

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/pay/confirm");
      alert("اطلاعات با موفقیت ثبت شد! انتقال به درگاه...");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 !font-[Vazir]" dir="rtl">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">

        {/* سایدبار */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-cyan-700 to-cyan-900 text-white p-8 relative overflow-hidden flex flex-col justify-between">

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-cyan-800/50 px-3 py-1 rounded-full text-xs mb-6 border border-cyan-600/30">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              ظرفیت محدود: ۵ نفر باقی‌مانده
            </div>

            <h1 className="text-3xl font-bold mb-2">بوت‌کمپ جامع فرانت‌اند</h1>
            <p className="text-cyan-100 text-lg mb-8">زمستان ۱۴۰۴ - سطح پیشرفته</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                <span className="text-sm">پروژه محور با منتورینگ اختصاصی</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                <span className="text-sm">تضمین استخدام نفرات برتر</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                <span className="text-sm">{title}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto pt-8 border-t border-cyan-700/50">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm">مبلغ قابل پرداخت:</span>
              <div className="text-left">
                <span className="text-sm line-through opacity-70 ml-2">۱۵,۰۰۰,۰۰۰</span>
                <span className="text-2xl font-bold">{amount}</span>
                <span className="text-xs mr-1">تومان</span>
              </div>
            </div>

            <div className="bg-cyan-800/50 rounded-lg p-3 text-xs text-cyan-100 flex items-start gap-2">
              <HelpCircle className="w-4 h-4" />
              <p>لطفا اطلاعات خود را دقیق وارد کنید</p>
            </div>
          </div>
        </div>

        {/* فرم */}
        <div className="w-full md:w-7/12 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-cyan-600" />
              اطلاعات پرداخت‌کننده
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* نام */}
              <div>
                <label className="block text-sm font-medium mb-1.5">نام و نام‌خانوادگی</label>
                <div className="relative">
                  <User className="absolute right-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="مثال: علی رضایی"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full pr-10 py-3 bg-slate-50 border rounded-xl"
                  />
                </div>
              </div>

              {/* موبایل */}
              <div>
                <label className="block text-sm font-medium mb-1.5">شماره موبایل</label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0912..."
                    value={form.phone}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className="w-full pr-10 py-3 bg-slate-50 border rounded-xl text-right"
                  />
                </div>
              </div>

              {/* ایمیل */}
              <div>
                <label className="block text-sm font-medium mb-1.5">ایمیل</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className="w-full pr-10 py-3 bg-slate-50 border rounded-xl text-right"
                  />
                </div>
              </div>

              {/* دکمه */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${isLoading ? "opacity-70" : ""}`}
              >
                {isLoading ? "در حال پردازش..." : `پرداخت امن ${amount} تومان`}
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>اطلاعات شما با رمزنگاری امن محافظت می‌شود</span>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
