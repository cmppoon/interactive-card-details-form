"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgMobile from "/public/bg-main-mobile.png";
import bgDesktop from "/public/bg-main-desktop.png";

export default function BgImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Image
      src={isMobile ? bgMobile : bgDesktop}
      alt="Responsive background"
      layout="responsive"
      width={isMobile ? 375 : 483}
      height={isMobile ? 240 : 900}
      className="max-h-full"
    />
  );
}
