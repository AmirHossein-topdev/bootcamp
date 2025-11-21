"use client";
import React, { useState } from "react";
import { CheckCircleIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const options = [
  { id: 1, title: "پرداخت نقدی ", price: "12 میلیون تومان" , amount: "۱۲,۰۰۰,۰۰۰" },
  { id: 2, title: " پرداخت قسطی", price: "2 قسط، ماهانه 6 میلیون" , amount: "۶,۰۰۰,۰۰۰" },
  { id: 3, title: "پرداخت قسطی", price: "3 قسط، ماهانه 4 میلیون" , amount: "۳,۰۰۰,۰۰۰" },
];


export default function Payment() {
  const [selected, setSelected] = useState(1);
  const router = useRouter();

  const handlePayment = () => {
    const selectedOption = options.find((o) => o.id === selected);
    // استفاده از query string برای ارسال داده به صفحه پرداخت
    router.push(
      `/pay?title=${encodeURIComponent(selectedOption.title)}&amount=${encodeURIComponent(selectedOption.amount)}`
    );
  };

  return (
    <div className="mx-auto w-[90vw]">
      <div className="flex flex-col lg:flex-row gap-4">
        {options.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`relative flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer transition 
              ${
                selected === opt.id
                  ? "bg-blue-700 text-white border-2 border-blue-500"
                  : "bg-white text-gray-700"
              }
            `}
          >
            {selected === opt.id && (
              <CheckCircleIcon className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-white" />
            )}
            <div className="flex items-center gap-3">
              <CreditCardIcon
                className={`w-8 h-8 ${
                  selected === opt.id ? "text-white" : "text-gray-400"
                }`}
              />
              <div className="flex items-center gap-3 ml-8 lg:ml-0">
                <div>
                  <p className="font-bold">{opt.title}</p>
                  <p className="text-sm mt-1">{opt.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-8 rounded-lg p-4 bg-blue-600 text-white flex flex-col items-center gap-2 w-full"
        onClick={handlePayment}
      >
        <span>پرداخت و رزرو 👋🏻</span>
        <span className="font-bold text-xl">
          {options.find((o) => o.id === selected).price}
        </span>
      </button>
    </div>
  );
}
