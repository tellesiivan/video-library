export default function Theme() {
  const theme =
    localStorage.getItem("theme") !== "undefined"
      ? JSON.parse(localStorage.getItem("theme"))
      : localStorage.setItem("theme", JSON.stringify("light"));

  document.documentElement.classList.remove(
    theme === "light" ? "dark" : "light"
  );
  document.documentElement.classList.add(theme);

  return theme ?? "light";
}
