import Image from "next/image";
import Link from "next/link";
import CardImage from "../cardImage";
import iconComplete from "/public/icon-complete.svg";

export default async function Complete({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const {
    cvc = "",
    month = "",
    year = "",
    name = "",
    cardNum = "",
  } = await searchParams;

  return (
    <>
      <section className="relative sm:col-span-1">
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
      <section className="row-span-2 mt-16 p-4 text-center text-very-dark-violet lg:col-span-2 lg:m-auto lg:max-w-96">
        <Image
          className="mx-auto mt-4 w-20"
          src={iconComplete}
          alt="complete icon"
        />
        <h1 className="mt-4 text-2xl font-bold tracking-widest">THANK YOU!</h1>
        <p className="mt-4 text-dark-grayish-violet">
          We&apos;ve added your card details
        </p>
        <Link
          className="mt-10 flex w-full justify-center rounded-md bg-very-dark-violet px-3 py-3 text-sm/6 font-semibold text-light-grayish-violet"
          href="/"
        >
          Continue
        </Link>
      </section>
    </>
  );
}
