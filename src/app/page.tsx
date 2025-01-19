"use client";

import Form from "next/form";
import { useState } from "react";
import BgImage from "./bgImage";
import CardImage from "./cardImage";

export default function Home() {
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    cardNum: "",
    month: "",
    year: "",
    cvc: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      cardNum: "",
      month: "",
      year: "",
      cvc: "",
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

    // Card Number validation
    if (!cardNum.trim()) {
      newErrors.cardNum = "Card number is required.";
    } else if (!/^\d{16}$/.test(cardNum)) {
      newErrors.cardNum = "Card number must be 16 digits.";
    }

    // Expiration Date validation
    if (
      !month.trim() ||
      !/^\d{2}$/.test(month) ||
      Number(month) < 1 ||
      Number(month) > 12
    ) {
      newErrors.month = "Invalid month.";
    }
    if (
      !year.trim() ||
      !/^\d{2}$/.test(year) ||
      Number(year) < new Date().getFullYear() % 100
    ) {
      newErrors.year = "Invalid year.";
    }

    // CVC validation
    if (!cvc.trim() || !/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "CVC must be a 3-digit number.";
    }

    console.log(errors);
    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault(); // Prevent default form submission if validation fails
    }
  };
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
      <section className="row-span-2 mt-10 p-4 text-very-dark-violet sm:col-span-2 sm:m-auto sm:max-w-96">
        <Form
          onSubmit={handleSubmit}
          action="complete"
          className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-4"
        >
          <div className="col-span-full sm:col-span-4">
            <label
              htmlFor="name"
              className={`block text-sm font-medium ${
                errors.name && "text-red-600"
              }`}
            >
              Name on card
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="cc-name"
                className={`block w-full rounded-md sm:text-sm ${
                  errors.name
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
                }`}
                placeholder="e.g. Jane Appleseed"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-full sm:col-span-4">
            <label
              htmlFor="cardNum"
              className={`block text-sm font-medium ${
                errors.cardNum && "text-red-600"
              }`}
            >
              Card number
            </label>
            <div className="mt-1">
              <input
                id="cardNum"
                name="cardNum"
                type="text"
                autoComplete="cc-number"
                className={`block w-full rounded-md sm:text-sm ${
                  errors.cardNum
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
                }`}
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={16}
                value={cardNum}
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="expDate"
              className={`block text-sm font-medium ${
                errors.month && "text-red-600"
              }`}
            >
              Exp. Date (MM/YY)
            </label>
            <div className="mt-1 flex gap-x-2">
              <input
                id="month"
                name="month"
                type="text"
                autoComplete="cc-exp-month"
                aria-labelledby="expDate"
                className={`block w-full rounded-md sm:text-sm ${
                  errors.month
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
                }`}
                placeholder="MM"
                maxLength={2}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
              <input
                id="year"
                name="year"
                type="text"
                autoComplete="cc-exp-year"
                aria-labelledby="expDate"
                className={`block w-full rounded-md sm:text-sm ${
                  errors.year
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
                }`}
                placeholder="YY"
                maxLength={2}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="cvc"
              className={`block text-sm font-medium ${
                errors.cardNum && "text-red-600"
              }`}
            >
              CVC
            </label>
            <div className="mt-1">
              <input
                id="cvc"
                name="cvc"
                type="text"
                maxLength={3}
                autoComplete="cc-csc"
                className={`block w-full rounded-md sm:text-sm ${
                  errors.cvc
                    ? "border-red-600 placeholder:text-red-600"
                    : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
                }`}
                placeholder="e.g. 123"
                value={cvc}
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-very-dark-violet px-3 py-3 text-sm/6 font-semibold text-light-grayish-violet"
            >
              Confirm
            </button>
          </div>
        </Form>
      </section>
    </main>
  );
}
