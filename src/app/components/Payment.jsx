"use client";
import React, { useState } from "react";
import { CheckCircleIcon, CreditCardIcon } from "@heroicons/react/24/solid";

const options = [
  { id: 1, title: "پرداخت نقدی با زرین پال", price: "12 میلیون تومان" },
  { id: 2, title: "پرداخت قسطی", price: "2 قسط، ماهانه 6 میلیون" },
  { id: 3, title: "پرداخت قسطی", price: "3 قسط، ماهانه 4 میلیون" },
];

export default function Payment() {
  const [selected, setSelected] = useState(1);

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
            {/* چک آیکون وقتی انتخاب شده */}
            {selected === opt.id && (
              <CheckCircleIcon className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-white" />
            )}
            <div className="flex items-center gap-3">
              {/* کارت بانکی آیکون */}
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

      <a
        className="mt-8 rounded-lg p-4 bg-blue-600 text-white flex flex-col items-center gap-2"
        href="https://pay.fronthooks.ir/link/416277"
        target="_blank"
        rel="noreferrer"
      >
        <span>پرداخت و رزرو 👋🏻</span>
        <span className="font-bold text-xl">
          {options.find((o) => o.id === selected).price}
        </span>
      </a>
    </div>
  );
}
