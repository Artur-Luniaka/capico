"use client";
import HeaderLogo from "@/components/HeaderLogo";
import Container from "@/components/Container";
import BurgerIcon from "@/components/BurgerIcon";
import ReusableBtn from "@/components/ReusableBtn";
import LanguageSelect from "@/components/LanguageSelect";

const Header = () => {
  return (
    <Container>
      <header className="px-[15px] pt-[25px] md:px-0 flex justify-between items-center">
        <HeaderLogo />
        <LanguageSelect />
        <ReusableBtn
          className="gap-4 font-nekst-medium text-[25px] bg-violet w-[179px] h-[60px] rounded-[43px] leading-[25px] tracking-[-0.03em] hover:bg-violet-hover transition-all duration-300"
          iconWidth={20}
          iconHeight={10}
        >
          sign in
        </ReusableBtn>
        <BurgerIcon />
      </header>
    </Container>
  );
};

export default Header;
