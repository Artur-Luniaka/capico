"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "@/utils/useTranslation";

const DesktopNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:flex gap-8">
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {t("features")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {t("prices")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {t("partners")}
      </Link>
      <Link
        href="#"
        className="font-nekst-medium text-[25px] leading-[25px] tracking-[-0.03em] hover:text-violet-hover transition-all duration-300"
      >
        {t("knowledgeBase")}
      </Link>
    </nav>
  );
};

export default DesktopNav;
