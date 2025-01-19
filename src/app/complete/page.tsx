import BgImage from "../bgImage";
import CardImage from "../cardImage";
import Image from "next/image";
import iconComplete from "/public/icon-complete.svg";
import Link from "next/link";

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

  console.log(name);

  return (
    <main className="grid grid-flow-row grid-rows-3 sm:max-h-screen sm:grid-flow-col sm:grid-cols-3 sm:grid-rows-1">
      <section className="relative sm:col-span-1">
        <BgImage />
        <CardImage
          cardNum={cardNum}
          name={name}
          month={month}
          year={year}
          cvc={cvc}
        />
      </section>
      <section className="row-span-2 mt-10 p-4 text-center text-very-dark-violet sm:col-span-2 sm:m-auto sm:max-w-96">
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
    </main>
  );
}
