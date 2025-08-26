"use client";

import Image from "next/image";
import burger from "../../public/SVG/burger-menu.svg";
import closeIcon from "../../public/SVG/close-icon.svg";

const BurgerIcon = ({ isOpen, onClick }) => {
  return (
    <div
      className="relative z-40 cursor-pointer block lg:hidden"
      onClick={onClick}
    >
      <Image
        className={`md:w-[50px] md:h-[27px] transition-all duration-300 ${
          isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
        }`}
        src={burger}
        alt="Burger Icon"
        width={34}
        height={22}
      />
      <Image
        className={`absolute top-0 left-0 md:w-[50px] md:h-[27px] transition-all duration-300 ${
          isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
        }`}
        src={closeIcon}
        alt="Close Icon"
        width={26}
        height={26}
      />
    </div>
  );
};

export default BurgerIcon;
