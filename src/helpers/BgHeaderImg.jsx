import React from "react";

export default function BgHeaderImg({ info }) {
  const { heading, desc, imgSrc } = info;
  return (
    <div className="p-2 mx-auto md:p-4">
      <div className="relative rounded-lg sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src={imgSrc}
            alt="People working on laptops"
          />
          <div className="absolute inset-0 bg-indigo-700 dark:bg-dark-secondary mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-32 sm:px-6 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl ">
            <span className="block text-white">{heading}</span>
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-lg text-center text-indigo-200 dark:text-dark-primaryText sm:max-w-3xl">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
