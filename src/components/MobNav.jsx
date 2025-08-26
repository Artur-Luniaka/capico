"use client";

import { getTranslation } from "@/utils/i18n";
import Link from "next/link";
import React from "react";
import LanguageSelectMob from "@/components/LanguageSelectMob";
import ReusableBtn from "@/components/ReusableBtn";
import gradient from "../../public/IMG/mob-nav-gradient.webp";
import Image from "next/image";

const MobNav = ({ locale, isOpen, onLanguageChange }) => {
  return (
    <div
      className={`pt-[50px] pb-5 px-[15px] z-10 absolute top-0 left-0 w-full h-full bg-black transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mt-auto">
          <nav className="flex flex-col items-center justify-center gap-5">
            <Link
              href="#"
              className="font-nekst-medium text-[35px] leading-[59px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
            >
              {getTranslation(locale, "features")}
            </Link>
            <Link
              href="#"
              className="font-nekst-medium text-[35px] leading-[59px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
            >
              {getTranslation(locale, "prices")}
            </Link>
            <Link
              href="#"
              className="font-nekst-medium text-[35px] leading-[59px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
            >
              {getTranslation(locale, "partners")}
            </Link>
            <Link
              href="#"
              className="font-nekst-medium text-[35px] leading-[59px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
            >
              {getTranslation(locale, "knowledgeBase")}
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <LanguageSelectMob
            locale={locale}
            onLanguageChange={onLanguageChange}
          />
        </div>
        <div className="mt-auto">
          <ReusableBtn
            iconWidth={32}
            iconHeight={10}
            className="w-[345px] h-[59px] rounded-[27px] gap-5 border border-violet bg-transparent font-nekst-semibold text-[23px] leading-[23px] tracking-[-0.02em] hover:bg-violet-hover/40 transition-all duration-300"
          >
            {getTranslation(locale, "signIn")}
          </ReusableBtn>
        </div>
      </div>
      <Image
        src={gradient}
        width={900}
        height={353}
        alt="gradient"
        className="absolute bottom-0 right-0 -z-10 pointer-events-none"
      />
    </div>
  );
};

export default MobNav;
