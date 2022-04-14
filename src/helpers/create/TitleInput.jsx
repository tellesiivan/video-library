import React, { useState } from "react";

export default function TitleInput({ settings, captureValue }) {
  const { idValue, placeholderValue } = settings;
  const [value, setValue] = useState("");

  function onChangeHandler(e) {
    setValue(e.target.value);

    captureValue(e.target.value, idValue);
  }

  return (
    <div className="py-4 mx-2">
      <label
        htmlFor={idValue}
        className="block text-sm font-medium text-gray-700 dark:text-dark-primaryText"
      >
        {idValue}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={idValue}
          id={idValue}
          value={value}
          className="block w-full px-2 py-3 rounded-md dark:bg-dark-secondary focus:outline-none sm:text-sm"
          placeholder={placeholderValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
