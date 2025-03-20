import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-gradient-to-b cursor-pointer from-[#444444] to-[#333333] flex justify-center items-center text-white border-t-2 border-inner-alignment border-white/20 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.3)] hover:bg-[#444444] hover:shadow-[0px_2px_2px_0px_rgba(0,0,0,0.3)] active:bg-[#444444] font-sans active:border active:border-[#1F1F1F] rounded-[4px] px-4 py-2 gap-[10px]   ">
      {children}
    </button>
  );
}
