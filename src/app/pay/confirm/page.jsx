 "use client";

import React, { useState } from 'react';
import { Copy, Check, Send, CreditCard, Building2, User, ArrowRight } from 'lucide-react';

export default function ConfirmPaymentPage() {
  const [copied, setCopied] = useState(false);

  // اطلاعات حساب
  const cardInfo = {
    number: "6280231540652103",
    formattedNumber: "۶۲۸۰  ۲۳۱۵  ۴۰۶۵  ۲۱۰۳",
    owner: "مرتضی محمدی",
    bank: "مسکن"
  };

  // تابع کپی شماره کارت
  const handleCopy = () => {
    navigator.clipboard.writeText(cardInfo.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // تابع ارسال به تلگرام
  const handleSendToTelegram = () => {
    const telegramUsername = "mortrza0";
    const message = encodeURIComponent(
      `سلام،\nبرای ثبت نام در بوت‌کمپ زمستان ۱۴۰۳ پیام می‌فرستم. رسید کارت به کارت را در ادامه برای شما ارسال خواهم کرد.\nدوره: فرانت‌اند`
    );
    window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-6  !font-[Vazir]" dir="rtl">
      
      {/* کانتینر اصلی */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-slate-100">
        
        {/* هدر رنگی */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-6 text-white text-center relative overflow-hidden">
          {/* اشکال دکوراتیو پس‌زمینه */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full translate-x-10 translate-y-10"></div>
          
          <h1 className="text-2xl font-bold relative z-10">تایید و پرداخت</h1>
          <p className="text-cyan-100 text-sm mt-1 relative z-10">بوت‌کمپ زمستان ۱۴۰۳ - دوره فرانت‌اند</p>
        </div>

        <div className="p-6 space-y-8">
          
          {/* نمایش بصری کارت بانکی */}
          <div className="relative w-full h-56 bg-slate-800 rounded-2xl shadow-lg overflow-hidden text-white p-6 flex flex-col justify-between transform transition-transform hover:scale-[1.02] duration-300">
            {/* پس‌زمینه گرادینت کارت */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>
            
            {/* محتوای داخل کارت */}
            <div className="relative z-10 flex justify-between items-start">
               <Building2 className="w-8 h-8 text-cyan-400 opacity-80" />
               <span className="text-sm font-medium text-gray-300 tracking-wide">بانک {cardInfo.bank}</span>
            </div>

            <div className="relative z-10">
               {/* چیپ کارت */}
               <div className="w-12 h-9 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded mb-4 flex items-center justify-center overflow-hidden shadow-inner">
                  <div className="w-full h-[1px] bg-yellow-600/50 my-[2px]"></div>
               </div>
               {/* شماره کارت روی کارت */}
               <div className="text-xl md:text-2xl font-mono tracking-widest text-center drop-shadow-md" dir="ltr">
                 {cardInfo.number.match(/.{1,4}/g).join('  ')}
               </div>
            </div>

            <div className="relative z-10 flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 mb-1">نام صاحب کارت</span>
                <span className="font-medium tracking-wide">{cardInfo.owner}</span>
              </div>
              <div className="flex flex-col items-end">
                 <span className="text-[10px] text-gray-400 mb-1">CVV2</span>
                 <span className="font-mono text-sm">***</span>
              </div>
            </div>
          </div>

          {/* بخش کپی و جزئیات */}
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm text-cyan-600">
                  <CreditCard size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">شماره کارت</span>
                  <span className="font-mono font-bold text-slate-700 text-sm md:text-base dir-ltr select-all">{cardInfo.number}</span>
                </div>
              </div>
              <button 
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium
                  ${copied 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-white text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 border border-slate-200'
                  }`}
              >
                {copied ? (
                  <>
                    <span>کپی شد</span>
                    <Check size={16} />
                  </>
                ) : (
                  <>
                    <span>کپی</span>
                    <Copy size={16} />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
               <div className="bg-white p-2 rounded-lg shadow-sm text-cyan-600">
                  <User size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">صاحب حساب</span>
                  <span className="font-bold text-slate-700">{cardInfo.owner}</span>
                </div>
            </div>
          </div>

          {/* راهنما */}
          <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-lg">
            <p className="text-sm text-yellow-800 leading-relaxed">
              <span className="font-bold ml-1">توجه:</span>
              لطفاً پس از واریز وجه، اسکرین‌شات یا رسید پرداخت را ذخیره کرده و دکمه زیر را بزنید.
            </p>
          </div>

          {/* دکمه اقدام اصلی */}
          <button
            onClick={handleSendToTelegram}
            className="group w-full bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-cyan-200 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
          >
            <span>ارسال رسید در تلگرام</span>
            <Send size={20} className="transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
      
      <p className="mt-6 text-slate-400 text-xs">طراحی شده برای بوت‌کمپ زمستان ۱۴۰۳</p>
    </div>
  );
}