import { RiMoonClearLine, RiMoonClearFill } from "react-icons/ri";
import Theme from "./theme";

export default function themeIcon(currentTheme) {
  const styleDefault = `w-6 h-6`;
  localStorage.setItem("theme", JSON.stringify(currentTheme));

  const currentIcon =
    currentTheme === "light" ? (
      <RiMoonClearLine className={styleDefault} />
    ) : (
      <RiMoonClearFill className={styleDefault} />
    );

  // on click trigger HTML class mode change
  Theme();

  return currentIcon;
}
