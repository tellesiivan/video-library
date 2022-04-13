import { Link, useLocation } from "react-router-dom";

export default function Category({ navItem }) {
  const location = useLocation();

  const activeStyle = `bg-gradient-to-r from-indigo-500 via-purple-500 dark:text-white`;
  const defaultStyle = `w-full py-6 text-black-primary cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-dark-primary flex flex-col items-center justify-center `;
  const createStyle =
    "bg-gradient-to-r from-indigo-500 via-purple-500 dark:text-white";

  function classType(path) {
    let x;

    if (path === location.pathname) {
      x = `${defaultStyle} ${activeStyle}`;
    } else {
      x = defaultStyle;
    }

    return x;
  }

  return (
    <>
      <Link to={navItem.href} className={classType(navItem.href)}>
        {navItem.iconSrc}
      </Link>
    </>
  );
}
