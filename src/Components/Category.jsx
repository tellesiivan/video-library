import { Link, useLocation } from "react-router-dom";

export default function Category({ navItem }) {
  const location = useLocation();

  const activeStyle = `dark:text-dark-yellow text-light-purple`;
  const defaultStyle = `w-full py-7 text-black-primary cursor-pointer  hover:bg-gray-200 dark:hover:bg-dark-navHover flex flex-col items-center justify-center `;
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
