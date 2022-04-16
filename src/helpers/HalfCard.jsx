import React from "react";

export default function HalfCard({ children, customStyle }) {
  const { bg, customClasses } = customStyle;

  return (
    <div
      className={`w-full md:w-6/12 p-2 rounded-md h-96 md:h-full ${
        bg ?? "dark:bg-dark-altLight bg-gray-200"
      } ${customClasses ?? ""}`}
    >
      {children}
    </div>
  );
}
