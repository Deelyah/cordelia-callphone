import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let isAuthenticated = window.localStorage.getItem("IS_AUTHENTICATED");
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/home"></Navigate>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </>
  );
};
export default ProtectedRoute;
