import React from "react";

import {
  RiHomeLine,
  RiListCheck2,
  RiVideoAddLine,
  RiBookmarkLine,
} from "react-icons/ri";
import { Category } from "../index";

export const navigation = [
  { id: 1, name: "Home", iconSrc: <RiHomeLine size="1.5em" />, href: "/" },
  {
    id: 3,
    name: "Create",
    iconSrc: <RiVideoAddLine size="1.5em" />,
    href: "/create",
  },
  {
    id: 2,
    name: "Categories",
    iconSrc: <RiListCheck2 size="1.5em" />,
    href: "/categories",
  },

  {
    id: 4,
    name: "Bookmarks",
    iconSrc: <RiBookmarkLine size="1.5em" />,
    href: "/bookmarks",
  },
];

export default function SideNav() {
  return (
    <div className="fixed bottom-0 left-0 flex-col items-center justify-start hidden w-20 bg-gray-100 border-t border-gray-200 md:flex top-16 dark:bg-dark-secondary dark:border-gray-600">
      {navigation.map((i) => (
        <Category navItem={i} key={i.id} />
      ))}
    </div>
  );
}
