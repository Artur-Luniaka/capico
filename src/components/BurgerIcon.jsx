"use client";

import Image from "next/image";
import burger from "../../public/SVG/burger-menu.svg";

const BurgerIcon = () => {
  return (
    <Image
      className="md:w-[50px] md:h-[27px]"
      src={burger}
      alt="Burger Icon"
      width={34}
      height={22}
    />
  );
};

export default BurgerIcon;
