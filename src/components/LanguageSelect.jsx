"use client";

import { useState } from "react";
import Image from "next/image";
import arrowSvg from "../../public/SVG/select-arrow.svg";

export default function LanguageSelect() {
  const [value, setValue] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["EN", "RU", "PL"];

  return (
    <div className="relative inline-block">
      {/* Кнопка с текущим языком */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex items-center justify-between gap-4 cursor-pointer p-2 rounded-[20px] hover:bg-violet-hover/40 transition-all duration-300"
      >
        <span className="font-nekst-light text-[25px] leading-[25px] tracking-[-0.03em]">
          {value}
        </span>
        <Image src={arrowSvg} width={16} height={9} alt="arrow" />
      </button>

      {/* Список языков */}
      {isOpen && (
        <div className="absolute mt-2 w-32 bg-violet rounded-[20px] z-10">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-3 py-[8px] cursor-pointer hover:bg-white/10 hover:rounded-[20px] font-nekst-light text-lg leading-[30px] tracking-[-0.01em]"
              onClick={() => {
                setValue(lang);
                setIsOpen(false);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
