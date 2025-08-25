"use client";

import Image from "next/image";
import logo from "../../public/SVG/header-logo.svg";

const HeaderLogo = () => {
  return (
    <Image
      className="md:w-[264px] md:h-[57px]"
      src={logo}
      alt="Logo"
      width={132}
      height={29}
    />
  );
};

export default HeaderLogo;
