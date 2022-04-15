import React from "react";

export default function HalfCard({ children }) {
  return (
    <div className="w-6/12 p-2 bg-gray-200 rounded-md dark:bg-dark-altLight">
      {children}
    </div>
  );
}
