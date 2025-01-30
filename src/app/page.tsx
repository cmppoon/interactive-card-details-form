"use client";

import { useState } from "react";
import CardForm from "./cardForm";
import CardImage from "./cardImage";

export default function Home() {
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");

  return (
    <>
      <section className="lg:col-span-1">
        <div className="h-full bg-[url(/bg-main-mobile.png)] bg-cover bg-no-repeat lg:bg-[url(/bg-main-desktop.png)]">
          <div className="grid h-full grid-rows-12">
            <CardImage
              cardNum={cardNum}
              name={name}
              month={month}
              year={year}
              cvc={cvc}
            />
          </div>
        </div>
      </section>
      <section className="row-span-2 mt-10 p-4 text-very-dark-violet lg:col-span-2 lg:m-auto lg:max-w-96">
        <CardForm
          name={name}
          setName={setName}
          cardNum={cardNum}
          setCardNum={setCardNum}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
        />
      </section>
    </>
  );
}
