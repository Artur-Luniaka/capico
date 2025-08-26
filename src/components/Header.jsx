"use client";
import HeaderLogo from "@/components/HeaderLogo";
import Container from "@/components/Container";
import BurgerIcon from "@/components/BurgerIcon";
import ReusableBtn from "@/components/ReusableBtn";
import LanguageSelect from "@/components/LanguageSelect";
import DesktopNav from "@/components/DesktopNav";
import { getTranslation, detectLocale } from "@/utils/i18n";
import { useState, useEffect } from "react";
import MobNav from "@/components/MobNav";

const Header = () => {
  const [locale, setLocale] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || detectLocale();
    setLocale(savedLocale);
  }, []);

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  useEffect(() => {
    if (locale) {
      document.title = getTranslation(locale, "title");
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          getTranslation(locale, "description")
        );
      }
    }
  }, [locale]);

  return (
    <Container>
      <header className="px-[15px] pt-[25px] md:px-0 flex justify-between items-center">
        <HeaderLogo />
        <LanguageSelect
          locale={locale}
          onLanguageChange={handleLanguageChange}
        />
        <DesktopNav locale={locale} />
        <div className="hidden md:flex">
          <ReusableBtn
            className="gap-4 font-nekst-medium text-[25px] bg-violet w-[179px] h-[60px] rounded-[43px] leading-[25px] tracking-[-0.03em] hover:bg-violet-hover transition-all duration-300"
            iconWidth={20}
            iconHeight={10}
          >
            {getTranslation(locale, "signIn")}
          </ReusableBtn>
        </div>
        <BurgerIcon
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <MobNav
          locale={locale}
          isOpen={isMobileMenuOpen}
          onLanguageChange={handleLanguageChange}
        />
      </header>
    </Container>
  );
};

export default Header;
