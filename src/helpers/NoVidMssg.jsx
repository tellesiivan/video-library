import React from "react";
import { Link } from "react-router-dom";

export default function NoVidMssg() {
  return (
    <div className="bg-light-purple dark:bg-dark-altLight">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-dark-primaryText md:text-4xl">
          <span className="block"> No videos uploaded yet</span>
          <span className="block text-white dark:text-dark-green">
            start uploading.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md">
            <Link
              to="/create"
              className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-md text-white border dark:border-dark-primaryText dark:text-dark-primaryText"
            >
              Upload video
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
