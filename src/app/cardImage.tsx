import React from "react";
import bgCardFront from "/public/bg-card-front.png";
import bgCardBack from "/public/bg-card-back.png";
import Image from "next/image";
import cardLogo from "/public/card-logo.svg";

const formatCardNumber = (cardNum: string): string => {
  // Remove all non-digit characters
  const cleaned = cardNum.replace(/\D/g, "");

  // Add spaces after every 4 digits
  return cleaned.padEnd(16, "0").replace(/(\d{4})(?=\d)/g, "$1 ");
};

const formatCvc = (cvc: string): string => {
  // Remove all non-digit characters and pad to 3 digits
  const cleaned = cvc.replace(/\D/g, "");
  return cleaned.padStart(3, "0");
};

export default function CardImage({
  cardNum,
  name,
  month,
  year,
  cvc,
}: {
  cardNum: string;
  name: string;
  month: string;
  year: string;
  cvc: string;
}) {
  return (
    <>
      <div className="absolute sm:left-48 sm:top-64">
        <div className="absolute -bottom-10 left-4 z-10 w-72 sm:w-[22rem]">
          <Image src={bgCardFront} alt="card back" />
          <div className="text-xl font-semibold text-light-grayish-violet">
            <Image
              className="absolute left-4 top-4 w-14"
              src={cardLogo}
              alt="logo"
            />
            <div className="absolute bottom-4 w-full px-4">
              <p className="tracking-[0.08em]">
                {formatCardNumber(cardNum) || "0000 0000 0000 0000"}
              </p>
              <div className="mt-2 flex justify-between text-xs">
                <p>{name || "Jane Appleseed"}</p>
                <p>{month && year ? `${month}/${year}` : "00/00"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute sm:bottom-32 sm:left-48">
        <div className="absolute bottom-12 left-[4.5rem] w-72 text-sm sm:w-[22rem]">
          <Image src={bgCardBack} alt="background" />
          <p className="absolute right-8 top-[4.2rem] font-semibold text-white sm:right-10 sm:top-[5.3rem]">
            {formatCvc(cvc) || "000"}
          </p>
        </div>
      </div>
    </>
  );
}
