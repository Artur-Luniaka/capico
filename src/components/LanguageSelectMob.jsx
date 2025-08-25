"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import arrowSvg from "../../public/SVG/select-arrow.svg";
import { detectLocale } from "@/utils/i18n";

export default function LanguageSelectMob({ onLanguageChange }) {
  const [value, setValue] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["en", "ru", "pl"];

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || detectLocale();
    setValue(savedLocale);
    onLanguageChange(savedLocale);
  }, [onLanguageChange]);

  return (
    <div className="relative inline-block mt-8">
      {isOpen && (
        <div className="absolute top-[-140px] w-32 bg-violet rounded-[20px] z-10">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-3 py-[8px] cursor-pointer hover:bg-white/10 hover:rounded-[20px] font-nekst-light text-lg leading-[30px] tracking-[-0.01em] text-white"
              onClick={() => {
                setValue(lang);
                setIsOpen(false);
                localStorage.setItem("locale", lang);
                onLanguageChange(lang);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-4 cursor-pointer p-3 rounded-[20px] hover:bg-violet-hover/20 transition-all duration-300 border border-violet/70"
      >
        <span className="font-nekst-light text-[25px] leading-[25px] tracking-[-0.03em] text-white">
          {value}
        </span>
        <Image src={arrowSvg} width={16} height={9} alt="arrow" />
      </button>
    </div>
  );
}
