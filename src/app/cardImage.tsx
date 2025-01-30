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
      <div className="z-10 row-start-7 mx-auto w-72 md:w-[19rem] lg:row-start-3 lg:m-0 lg:translate-x-36 xl:w-[24rem] xl:translate-x-44">
        <div className="relative">
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
      <div className="row-start-2 mx-auto w-72 translate-x-14 md:w-[19rem] lg:row-start-7 lg:m-0 lg:translate-x-52 xl:w-[24rem] xl:translate-x-72">
        <div className="relative">
          <Image src={bgCardBack} alt="background" />
          <p className="absolute right-8 top-[4.1rem] font-semibold text-white md:right-8 md:top-[4.3rem] xl:right-10 xl:top-[5.8rem]">
            {formatCvc(cvc) || "000"}
          </p>
        </div>
      </div>
    </>
  );
}
