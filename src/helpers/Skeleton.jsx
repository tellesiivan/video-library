import React from "react";

export default function Skeleton() {
  return (
    <div className="flex w-full space-x-8 animate-pulse">
      <div className="flex-1 py-1 space-y-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-4 col-span-2 bg-white rounded-xl"></div>
          <div className="h-4 col-span-1 bg-white rounded-xl"></div>
        </div>
        <div className="h-6 bg-white rounded-xl"></div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 col-span-2 bg-white rounded-xl"></div>
            <div className="h-4 col-span-1 bg-white rounded-xl"></div>
          </div>
          <div className="h-8 bg-white rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
