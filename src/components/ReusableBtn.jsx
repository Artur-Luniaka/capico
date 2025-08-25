"use client";
import Image from "next/image";
import arrowSvg from "../../public/SVG/btn-arrow.svg";

export default function ReusableBtn({
  children,
  className = "",
  iconWidth = 16,
  iconHeight = 16,
  showCircle = false,
  circleWidth = 10,
  circleHeight = 10,
  circleClassName = "",
  circlePosition = {},
  ...props
}) {
  return (
    <button
      className={`relative flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
      <Image src={arrowSvg} width={iconWidth} height={iconHeight} alt="arrow" />
      {showCircle && (
        <div
          className={`absolute bg-white rounded-full ${circleClassName}`}
          style={{
            width: circleWidth,
            height: circleHeight,
            ...circlePosition,
          }}
        />
      )}
    </button>
  );
}
