// src/app/pay/page.jsx
"use client"; // حتما این بالای فایل باشه

import dynamic from "next/dynamic";

const PayForm = dynamic(() => import("../components/PayForm"), { ssr: false });

export default function PayPage() {
  return <PayForm />;
}
