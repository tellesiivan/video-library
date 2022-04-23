import React from "react";

export default function Skeleton() {
  return (
    <div className="flex mt-20 space-x-8 md:mx-8 animate-pulse">
      <div className="flex-1 py-1 space-y-8">
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6">
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-4">
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-44 dark:bg-dark-secondary"></div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
          <div className="col-span-1 bg-gray-200 rounded-md h-36 dark:bg-dark-secondary"></div>
        </div>
      </div>
    </div>
  );
}
