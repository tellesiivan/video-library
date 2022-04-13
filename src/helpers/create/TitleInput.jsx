import React from "react";

export default function TitleInput() {
  return (
    <div className="mx-2 my-4">
      <label
        htmlFor="Title"
        className="block text-sm font-medium text-gray-700 dark:text-dark-primaryText"
      >
        Title
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="Title"
          id="Title"
          className="block w-full px-2 py-3 rounded-md shadow-sm dark:bg-dark-secondary focus:outline-none sm:text-sm"
          placeholder="Drifting on a Saturday morning..."
        />
      </div>
    </div>
  );
}
