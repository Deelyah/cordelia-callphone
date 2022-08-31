let baseURL = "https://adminstaging.airgate.ng/index.php/api/auth";

import axios from "axios";
export const login = async (userData) => {
  return await axios.post(`${baseURL}/login`, userData);
};
export const logOut = async () => {
  return await axios.post(
    `https://adminstaging.airgate.ng/index.php/api/auth/logout`
  );
};
