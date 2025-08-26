"use client";

import React from "react";
import ReusableBtn from "@/components/ReusableBtn";
import { useTranslation } from "@/utils/useTranslation";
import binance from "../../public/SVG/binance.svg";
import ftx from "../../public/SVG/ftx.svg";
import huobi from "../../public/SVG/huobi.svg";
import okx from "../../public/SVG/okx.svg";
import exmo from "../../public/SVG/exmo.svg";
import bybit from "../../public/SVG/bybit.svg";
import gradient from "../../public/IMG/mob-nav-gradient.webp";
import Image from "next/image";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative -z-10 w-full h-screen mb-[60px]">
      <Image
        src={gradient}
        alt="gradient"
        className="absolute bottom-[-130px] right-0 pointer-events-none"
        width={281}
        height={281}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[-280px] left-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/VIDEO/hero-video-mob.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[-280px] left-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/VIDEO/hero-video-desk.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col px-[15px]">
        <div className="flex flex-col mb-[67px] mt-[430px]">
          <h1 className="font-nekst-medium text-[44px] leading-[54px] tracking-[-0.03em] mb-[35px]">
            {t("heroTitle")}{" "}
            <span
              style={{
                background: "linear-gradient(150deg, #fff 0%, #5f29b7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("heroTitleHighlight")}
            </span>
          </h1>
          <ReusableBtn
            className="bg-violet w-[350px] h-[59px] rounded-[40px] font-nekst-semibold text-[19px] leading-[19px] tracking-[-0.02em] gap-10"
            iconWidth={32}
            iconHeight={10}
          >
            {t("heroButton")}
          </ReusableBtn>
        </div>
        <div>
          <p className="font-nekst-medium text-[18px] leading-[21px] tracking-[-0.04em] max-w-[243px] mb-5">
            {t("heroSubtitle")}
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px]">
              <Image src={binance} alt="binance" width={100} height={21} />
            </li>
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px]">
              <Image src={ftx} alt="binance" width={55} height={14} />
            </li>
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px]">
              <Image src={huobi} alt="binance" width={76} height={23} />
            </li>
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px]">
              <Image src={okx} alt="binance" width={57} height={24} />
            </li>
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px]">
              <Image src={exmo} alt="binance" width={89} height={15} />
            </li>
            <li className="flex items-center justify-center w-[168px] h-[80px] border border-violet/50 rounded-[30px] relative">
              <Image src={bybit} alt="binance" width={69} height={23} />
              <span className="flex items-center justify-center absolute top-[8px] right-[10px] w-[55px] h-[22px] bg-violet font-nekst-semibold text-[13px] leading-[15px] tracking-[-0.04em] rounded-[5px]">
                {t("soon")}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
