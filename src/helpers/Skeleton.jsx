import React from "react";

export default function Skeleton() {
  return (
    <div className="flex max-w-3xl mt-20 space-x-8 md:mx-8 animate-pulse">
      <div className="flex-1 py-1 space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-12 col-span-2 bg-gray-200 rounded-sm"></div>
          <div className="h-12 col-span-1 bg-gray-200 dark:bg-dark-secondary rounded-xl"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded-sm dark:bg-dark-secondary"></div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-10 col-span-2 bg-gray-200 rounded-sm dark:bg-dark-secondary"></div>
            <div className="h-4 col-span-1 bg-gray-200 rounded-sm dark:bg-dark-secondary"></div>
          </div>
          <div className="h-8 bg-gray-200 rounded-sm dark:bg-dark-secondary"></div>
        </div>
      </div>
    </div>
  );
}
