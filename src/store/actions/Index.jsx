let baseURL = process.env.REACT_APP_BASE_URL;

const login = async () => {
  return await axios.post(`${baseURL}/v1/check-email`, email, headers);
};
const logOut = async () => {};
