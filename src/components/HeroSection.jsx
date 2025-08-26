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
  const { t, locale } = useTranslation();

  return (
    <div className="relative z-10 w-full h-screen">
      <Image
        src={gradient}
        alt="gradient"
        className="absolute bottom-[-130px] md:bottom-[-325px] right-0 md:left-0 md:rotate-180 pointer-events-none -z-10"
        width={281}
        height={281}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[-280px] left-0 w-full h-full object-cover block md:hidden pointer-events-none"
      >
        <source src="/VIDEO/hero-video-mob.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[-100px] left-0 w-full h-full object-cover hidden md:block pointer-events-none"
      >
        <source src="/VIDEO/hero-video-desk.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col px-[15px] mb-[60px] md:mb-[30px]">
        <div
          className={`flex flex-col mb-[67px] ${
            locale === "pl" ? "md:mb-[92px]" : "md:mb-[263px]"
          } mt-[430px] md:mt-[60px]`}
        >
          <h1 className="font-nekst-medium text-[44px] md:text-[70px] leading-[54px] md:leading-[85px] tracking-[-0.03em] md:tracking-[-0.02em] mb-[35px] md:mb-[40px] md:max-w-[640px]">
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
            className="bg-violet md:bg-violet/60 max-w-[350px] md:w-[370px] h-[59px] md:h-[78px] rounded-[40px] font-nekst-semibold text-[19px] md:text-[28px] leading-[19px] md:leading-[26px] tracking-[-0.02em] md:tracking-[-0.03em] gap-10 hover:bg-violet-hover transition-all duration-300 cursor-pointer"
            iconWidth={32}
            iconHeight={10}
          >
            {t("heroButton")}
          </ReusableBtn>
        </div>
        <div>
          <p className="font-nekst-medium text-[18px] md:text-[30px] leading-[21px] md:leading-[34px] tracking-[-0.04em] max-w-[243px] md:max-w-full  mb-5">
            {t("heroSubtitle")}
          </p>
          <ul className="flex flex-wrap gap-2 items-center justify-center">
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] md:bg-[#0e0915] md:border-none">
              <a
                href="https://accounts.binance.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={binance}
                  alt="binance"
                  width={100}
                  height={21}
                  className="md:w-[123px] md:h-[26px]"
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] md:bg-[#0e0915] md:border-none">
              <a
                href="https://claims.ftx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={ftx}
                  alt="ftx"
                  width={55}
                  height={14}
                  className="md:w-[86px] md:h-[22px]"
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] md:bg-[#0e0915] md:border-none">
              <a
                href="https://www.htx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={huobi}
                  alt="huobi"
                  width={76}
                  height={23}
                  className="md:w-[88px] md:h-[27px]"
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] md:bg-[#0e0915] md:border-none">
              <a
                href="https://www.okx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={okx}
                  alt="okx"
                  width={57}
                  height={24}
                  className="md:w-[73px] md:h-[31px]"
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] md:bg-[#0e0915] md:border-none">
              <a
                href=" https://exmo.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={exmo}
                  alt="exmo"
                  width={89}
                  height={15}
                  className="md:w-[145px] md:h-[24px]"
                />
              </a>
            </li>
            <li className="flex items-center justify-center w-[168px] md:w-[240px] h-[80px] md:h-[105px] border border-violet/50 rounded-[30px] relative md:bg-[#0e0915] md:border-none">
              <Image
                src={bybit}
                alt="bybit"
                width={69}
                height={23}
                className="md:w-[73px] md:h-[25px]"
              />
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
