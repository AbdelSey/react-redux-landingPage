import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineAntDesign,
  AiOutlineBars,
  AiOutlineBell,
  AiOutlineStar,
  AiOutlineHeatMap,
} from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsFillPersonFill, BsArrowDownShort } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openNav } from "../features/NavSlice/NavBarSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <header className="m-4">
      <nav className="flex items-center justify-between relative ">
        {/* the left side of the nav */}

        <div className="flex mr-20 space-x-6">
          <div className="flex items-center space-x-3 ">
            <h1 className="text-xl">
              {" "}
              <FaPlaneDeparture />{" "}
            </h1>
            <h1 className="font-bold"> TravelBook </h1>
          </div>
        </div>

        <div className="absolute right-2 top-1 md:hidden cursor-pointer">
          <div>
            <h1 className="text-xl hover:text-3xl">
              <div className="fixed">
                <button
                  onClick={() => {
                    dispatch(openNav());
                  }}
                >
                  <AiOutlineBars />
                </button>
              </div>
            </h1>
          </div>
        </div>

        {/* the links in the nav */}

        <div>
          <ul className="md:flex space-x-10 font-bold hidden">
            <li className=" hover:border-orange-300 hover:border-b-2">
              <Link to="/"> Home</Link>
            </li>

            <li className=" hover:border-orange-300 hover:border-b-2">
              <Link to="/"> About </Link>
            </li>

            <li className=" hover:border-orange-300 hover:border-b-2">
              <Link to="/"> Destinations </Link>
            </li>

            <li className="hover:border-orange-300 hover:border-b-2">
              <Link to="/"> Tours </Link>
            </li>

            <li className=" hover:border-orange-300 hover:border-b-2">
              <Link to="/"> Blog</Link>
            </li>
          </ul>
        </div>

        {/* icons in the nav */}

        <div className="md:flex items-center space-x-3 text-xl hidden">
          <h1>
            <FiMapPin />{" "}
          </h1>
          <h1 className="text-2xl">
            {" "}
            <AiOutlineBell />{" "}
          </h1>
        </div>

        {/* background buts */}

        <div className="md:flex items-center space-x-4 hidden">
          <div className="bg-orange-400 py-1 px-2 rounded-xl">
            <div className="flex space-x-5 items-center">
              <h1 className="text-white text-xl">
                <AiOutlineStar />
              </h1>

              <div className="bg-black py-1 px-2 rounded">
                <h1 className="text-white">
                  <AiOutlineHeatMap />
                </h1>
              </div>
            </div>
          </div>

          <div className="flex text-2xl cursor-pointer">
            <div>
              <BsFillPersonFill />{" "}
            </div>

            <div>
              <h1>
                <BsArrowDownShort />{" "}
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
