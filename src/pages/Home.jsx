import BaseCard from "../components/base-components/BaseCard";
import "./pages.css";
import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen">
      <div className="relative bg-img w-full h-full flex flex-col justify-center items-center sm:pt-10">
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
        </BaseCard>
      </div>
    </div>
  );
};

export default Home;
