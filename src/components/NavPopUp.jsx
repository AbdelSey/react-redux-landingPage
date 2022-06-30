import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeNav } from "../features/NavSlice/NavBarSlice";

const NavPopUp = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-orange-400 bg-opacity-70 w-[600px] h-[560px] fixed mt-10 text-5xl text-black sm:hidden">
      <div className="w-[450px] h-[500px] mt-20">
        <ul className="font-bold flex flex-col items-center space-y-10">
          <li className=" hover:border-white hover:border-b-[4px] hover:text-6xl">
            <Link to="/"> Home</Link>
          </li>

          <li className=" hover:border-white hover:border-b-[4px] hover:text-6xl">
            <Link to="/"> About </Link>
          </li>

          <li className=" hover:border-white hover:border-b-[4px] hover:text-6xl">
            <Link to="/"> Destinations </Link>
          </li>

          <li className="hover:border-white hover:border-b-[4px] hover:text-6xl">
            <Link to="/"> Tours </Link>
          </li>

          <li className=" hover:border-white hover:border-b-[4px] hover:text-6xl">
            <Link to="/"> Blog</Link>
          </li>

          <button
            className="hover:text-white"
            onClick={() => {
              dispatch(closeNav());
            }}
          >
            <h1> X </h1>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavPopUp;
