export default function CustomInput({ settings, captureValue }) {
  const { idValue, placeholderValue, icon, value } = settings;

  function onChangeHandler(e) {
    captureValue(idValue, e.target.value);
  }

  return (
    <div className="py-3 mx-2">
      <label
        htmlFor={idValue}
        className="block text-sm font-medium text-gray-700 dark:text-dark-primaryText"
      >
        {idValue}
      </label>
      <div className="relative mt-1 rounded-md">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}

        <input
          type="text"
          name={idValue}
          id={idValue}
          value={value}
          className={`block w-full px-2 ${
            icon && "pl-10"
          } rounded-md h-14 dark:bg-dark-secondary focus:outline-none sm:text-sm`}
          placeholder={placeholderValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
