"use client";

import Form from "next/form";
import React, { useState } from "react";

type cardFormType = {
  name: string;
  setName: (val: string) => void;
  cardNum: string;
  setCardNum: (val: string) => void;
  month: string;
  setMonth: (val: string) => void;
  year: string;
  setYear: (val: string) => void;
  cvc: string;
  setCvc: (val: string) => void;
};

export default function CardForm({
  name,
  setName,
  cardNum,
  setCardNum,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
}: cardFormType) {
  const handleSubmit = (e: React.FormEvent) => {
    if (!validateForm()) {
      e.preventDefault(); // Prevent default form submission if validation fails
    }
  };

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

  const [errors, setErrors] = useState({
    name: "",
    cardNum: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <Form
      onSubmit={handleSubmit}
      action="complete"
      className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6 tracking-wide sm:grid-cols-4"
    >
      <div className="col-span-full sm:col-span-4">
        <label htmlFor="name" className="block text-sm font-medium">
          CARDHOLDER NAME
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="cc-name"
            className={`block w-full rounded-md sm:text-sm ${
              errors.name
                ? "border-red-600"
                : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
            }`}
            placeholder="e.g. Jane Appleseed"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
      </div>

      <div className="col-span-full sm:col-span-4">
        <label htmlFor="cardNum" className="block text-sm font-medium">
          CARD NUMBER
        </label>
        <div className="mt-1">
          <input
            id="cardNum"
            name="cardNum"
            type="text"
            autoComplete="cc-number"
            className={`block w-full rounded-md sm:text-sm ${
              errors.cardNum
                ? "border-red-600"
                : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={16}
            value={cardNum}
            onChange={(e) => setCardNum(e.target.value)}
          />
          {errors.cardNum && (
            <p className="mt-1 text-sm text-red-600">{errors.cardNum}</p>
          )}
        </div>
      </div>

      <div className="col-span-2">
        <label htmlFor="expDate" className="block text-sm font-medium">
          EXP. Date (MM/YY)
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
                ? "border-red-600"
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
                ? "border-red-600"
                : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
            }`}
            placeholder="YY"
            maxLength={2}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        {errors.month ? (
          <p className="mt-1 text-sm text-red-600">{`${errors.month}`}</p>
        ) : errors.year ? (
          <p className="mt-1 text-sm text-red-600">{`${errors.year}`}</p>
        ) : (
          <></>
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="cvc" className="block text-sm font-medium">
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
                ? "border-red-600"
                : "border-dark-grayish-violet placeholder:text-dark-grayish-violet"
            }`}
            placeholder="e.g. 123"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          />
          {errors.cvc && (
            <p className="mt-1 text-sm text-red-600">{errors.cvc}</p>
          )}
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
  );
}
