import React from "react";

export default function DescTextarea({ settings, captureValue }) {
  const { idValue, value, placeholderValue } = settings;

  function getValue(e) {
    captureValue(idValue, e.target.value);
  }

  return (
    <div>
      <label
        htmlFor={idValue}
        className="block text-sm font-medium text-gray-800 dark:text-dark-primaryText"
      >
        Add a short video description
      </label>
      <div className="mt-2">
        <textarea
          name={idValue}
          id={idValue}
          className="block w-full p-3 mt-3 text-sm font-medium text-gray-800 rounded-md focus:outline-none dark:bg-dark-secondary h-60 dark:text-dark-primaryText"
          value={value}
          placeholder={placeholderValue}
          onChange={getValue}
        />
      </div>
    </div>
  );
}
