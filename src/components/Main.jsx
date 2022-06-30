import React from "react";
import { BiHappyAlt } from "react-icons/bi";
import { BsAward } from "react-icons/bs";
import { FaFontAwesomeFlag } from "react-icons/fa";

const Main = () => {
  return (
    <main className="h-[90.1vh] bg-black md:h-[72vh]">
      <section className="flex items-center justify-center h-[50vh] container">
        <article>
          <h1 className="text-white text-5xl w-[270px] md:w-[700px] md:text-8xl cursor-pointer">
            <span className="font-bold hover:text-green-200">Discover </span>{" "}
            the World One Place At A Time!
          </h1>
        </article>
      </section>

      <section className="text-white flex items-center justify-center">
        <article className="flex flex-col items-center justify-center space-y-10  w-[159px] md:w-[1000px] md:flex-row md:space-y-0 md:justify-evenly">
          <div className="flex space-x-5 items-center justify-center mr-10">
            <div className="bg-white text-orange-400 py-3 px-3 rounded-xl text-3xl cursor-pointer">
              <BiHappyAlt />
            </div>
            <div classname="">
              <h1 className="font-bold text-3xl"> 500+ </h1>
              <h1 className="text-sm">Happy Customers</h1>
            </div>
          </div>

          <div className="flex items-center space-x-5 mr-3">
            <div className="bg-white text-orange-400 py-3 px-3 rounded-xl text-3xl flex flex-col cursor-pointer">
              <BsAward />{" "}
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-3xl"> 100+ </h1>
              <h1 className="text-sm"> Awards Received </h1>
            </div>
          </div>

          <div className="flex space-x-5">
            <div className="bg-white text-orange-400 py-3 px-3 rounded-xl text-3xl cursor-pointer">
              <FaFontAwesomeFlag />{" "}
            </div>

            <div className="">
              <h1 className="font-bold text-3xl"> 50+ </h1>
              <h1 className="text-sm">Years Experience</h1>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
