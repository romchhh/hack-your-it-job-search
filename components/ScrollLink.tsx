"use client";

import React from "react";

interface ScrollLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children: React.ReactNode;
}

export function ScrollLink({
  to,
  children,
  className,
  ...props
}: ScrollLinkProps) {
  const handleClick = () => {
    const element = document.getElementById(to);
    const header = document.querySelector("header");

    if (element && header) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 64 : header.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight,
        behavior: "smooth",
      });
      return;
    }

    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button type="button" onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
