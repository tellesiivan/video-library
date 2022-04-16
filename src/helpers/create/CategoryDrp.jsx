import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoryDrp({ settings, captureValue }) {
  const { idValue, value } = settings;

  const [selected, setSelected] = useState(value !== null ? value : people[3]);

  function captureCategory(category) {
    captureValue(idValue, category);
    setSelected(category);
  }

  return (
    <div className="py-4 mx-2">
      <Listbox value={selected} onChange={captureCategory}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-dark-primaryText">
              Choose a category
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full pl-3 pr-10 text-left bg-white rounded-md cursor-pointer h-14 dark:bg-dark-secondary focus:outline-none sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg dark:bg-dark-primary dark:text-dark-primaryText max-h-48 focus:outline-none sm:text-sm noScrollbar">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-white bg-indigo-600"
                            : "text-gray-900 dark:text-dark-primaryText",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {person.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
