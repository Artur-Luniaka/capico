"use client";

import Image from "next/image";
import logo from "../../public/SVG/header-logo.svg";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image
        className="md:w-[264px] md:h-[57px] relative z-40"
        src={logo}
        alt="Logo"
        width={132}
        height={29}
      />
    </Link>
  );
};

export default HeaderLogo;
