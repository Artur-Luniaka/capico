"use client";
import HeaderLogo from "@/components/HeaderLogo";
import Container from "@/components/Container";
import BurgerIcon from "@/components/BurgerIcon";
import ReusableBtn from "@/components/ReusableBtn";
import LanguageSelect from "@/components/LanguageSelect";
import DesktopNav from "@/components/DesktopNav";
import { useTranslation } from "@/utils/useTranslation";
import { useState } from "react";
import MobNav from "@/components/MobNav";

const Header = () => {
  const { t, locale, changeLanguage } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (newLocale) => {
    changeLanguage(newLocale);
  };

  return (
    <Container>
      <header className="px-[15px] pt-[25px] md:px-0 flex justify-between items-center">
        <HeaderLogo />
        <LanguageSelect
          locale={locale}
          onLanguageChange={handleLanguageChange}
        />
        <DesktopNav />
        <div className="hidden md:flex">
          <ReusableBtn
            className="gap-4 font-nekst-medium text-[25px] bg-violet w-[179px] h-[60px] rounded-[43px] leading-[25px] tracking-[-0.03em] hover:bg-violet-hover transition-all duration-300"
            iconWidth={20}
            iconHeight={10}
          >
            {t("signIn")}
          </ReusableBtn>
        </div>
        <BurgerIcon
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <MobNav
          isOpen={isMobileMenuOpen}
          onLanguageChange={handleLanguageChange}
        />
      </header>
    </Container>
  );
};

export default Header;
