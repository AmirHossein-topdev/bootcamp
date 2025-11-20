"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] my-10 mb-20 text-center">
      <h1 className="text-6xl font-bold text-cyan-600 mb-4">404</h1>
      <p className="text-gray-600 mb-6">صفحه‌ای که دنبالش هستی پیدا نشد.</p>
      <Link
        href="/"
        className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
