"use client";

import Link from "next/link";
import React from "react";
import { getTranslation } from "@/utils/i18n";

const DesktopNav = ({ locale }) => {
  return (
    <nav className="hidden lg:flex gap-8">
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {getTranslation(locale, "features")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {getTranslation(locale, "prices")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {getTranslation(locale, "partners")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {getTranslation(locale, "knowledgeBase")}
      </Link>
    </nav>
  );
};

export default DesktopNav;
