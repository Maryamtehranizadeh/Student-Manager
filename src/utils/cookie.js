const saveCookie = (token) =>
  (document.cookie = `Token=${token}; max-age=1*24*60*60; SameSite=None; Secure`);

const getCookie = () => {
  return document.cookie
    .split(";")
    .find((item) => item.trim().split("=")[0] === "Token")
    ?.split("=")[1];
};

export { getCookie, saveCookie };
