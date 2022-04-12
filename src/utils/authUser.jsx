export const getUser = () => {
  const localUser =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return localUser;
};

export const token = () => {
  const localToken =
    localStorage.getItem("token") !== "undefined"
      ? JSON.parse(localStorage.getItem("token"))
      : localStorage.clear();

  return localToken;
};
