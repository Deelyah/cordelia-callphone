import BaseCard from "../components/base-components/BaseCard";
import "./pages.css";
import logo from "../assets/logo.png";
import visible from "../assets/open.png";
import hidden from "../assets/close.png";
import { login } from "../store/actions/Index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import BaseSpinner from "../components/base-components/BaseSpinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  let dispatch = useDispatch();
  let navigateTo = useNavigate();
  let [pswdIsVisible, setPswdIsVisible] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let [isLoading, setIsLoading] = useState(false);

  let handleInputChange = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    login(userDetails)
      .then((res) => {
        window.localStorage.setItem("IS_AUTHENTICATED", true);
        setIsLoading(false);
        dispatch({ type: "LOGIN", payload: res.data });
        navigateTo("/home");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="bg-img bg-contain w-full min-h-screen flex flex-col justify-center items-center sm:pt-10">
        <div className="flex justify-center mt-6">
          <img
            src={logo}
            alt="logo"
            className="w-44 h-10 max-w-[215px] max-h-[74px]"
          />
        </div>

        <BaseCard>
          <h2 className="text-xl md:text-2xl text-black font-medium text-center">
            Welcome Back!
          </h2>
          <p className="text-sm md:text-base text-[#444444] text-center">
            Log into your account
          </p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="py-[26px]"
          >
            <div>
              <label htmlFor="email" className="text-[#9B9B9B]">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="w-full py-3 md:py-4 rounded-lg bg-[#9a9fbf20] px-3 md:px-4 focus:outline-none"
                placeholder="1234@gmail.com"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="text-[#9B9B9B]">
                Password
              </label>
              <div className="flex items-center w-full rounded-lg bg-[#e8f0fe] pr-2">
                <input
                  required
                  type={pswdIsVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="rounded-lg px-3 md:px-4 py-3 md:py-4 bg-transparent w-11/12 focus:outline-none"
                />
                <div className="">
                  {pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(false);
                      }}
                    >
                      <img src={visible} alt="open eye icon" />
                    </button>
                  )}
                  {!pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(true);
                      }}
                    >
                      <img src={hidden} alt="closed eye icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex mt-[25px]">
              <div className="hidden md:flex w-1/2">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Remember me
                </label>
              </div>
              <div className="flex justify-end w-full md:w-1/2">
                <Link
                  to="/"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <button className="w-full flex justify-center items-center text-white bg-[#4834D4] py-3 md:py-4 mt-11 rounded-lg">
              {isLoading ? <BaseSpinner /> : "Login"}
            </button>
          </form>
        </BaseCard>
      </div>
    </div>
  );
};

export default Login;
