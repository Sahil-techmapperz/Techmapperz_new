"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#1656b8]/20 border-t-[#1656b8] rounded-full animate-spin"></div>
        <p className="text-xl font-bold text-[#1656b8] animate-pulse">
          Loading Techmapperz...
        </p>
      </div>
    </div>
  );
}
