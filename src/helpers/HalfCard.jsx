import React from "react";

export default function HalfCard({ children, customStyle }) {
  const { bg, customClasses } = customStyle;

  return (
    <div
      className={`w-full md:w-6/12 rounded-md md:h-full ${
        bg ?? "dark:bg-dark-altLight bg-gray-200"
      } ${customClasses ?? "h-96 p-2"}`}
    >
      {children}
    </div>
  );
}
