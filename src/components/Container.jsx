"use client";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`container mx-auto px-4 xs:px-[15px] md:px-[30px] lg:px-[30px] ${className}`}
    >
      {children}
    </div>
  );
}
