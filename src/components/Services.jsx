import React from "react";
import {
  GiMountainCave,
  GiReceiveMoney,
  GiTrail,
  GiWorld,
} from "react-icons/gi";

const Services = () => {
  return (
    <section className="bg-black flex items-center justify-center ">
      <article className="md:flex md:mb-40 mb-10">
        <div className="text-white bg-indigo-600 w-[200px] h-[200px] text-center py-20 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl relative">
          <div className="text-6xl absolute top-1 right-1">
            <h1 className="hover:text-teal-200 cursor-pointer">
              <GiMountainCave />
            </h1>
          </div>

          <div className="w-[100px]">
            <h1 className="ml-10 font-bold">Top Places for You</h1>
          </div>
        </div>

        <div className="text-white bg-orange-500 w-[200px] h-[200px] text-center py-20 relative">
          <div className="hover:text-teal-200 absolute top-1 right-1 text-6xl cursor-pointer">
            <GiReceiveMoney />
          </div>

          <div>
            <h1 className="mt-10 font-bold">Cost Effective Options </h1>
          </div>
        </div>

        <div className=" bg-gray-300 w-[200px] h-[200px] text-center py-20 relative">
          <div className="hover:text-teal-200 absolute top-1 right-1 text-6xl cursor-pointer text-white">
            <GiTrail />
          </div>

          <div className="text-blue-700">
            <h1 className="font-bold">Adventure Awaits</h1>
            <p className="text-xs mt-10">
              We make personal suggestions for you!
            </p>
          </div>
        </div>

        <div className="text-white bg-teal-700 w-[200px] h-[200px] text-center py-20 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl relative">
          <div className="hover:text-teal-200 absolute top-1 right-1 text-6xl cursor-pointer text-white">
            <GiWorld/>
          </div>

          <div>
            <h1 className="font-bold"> Get out there! </h1>
            <p className="text-xs mt-8"> Explore the world </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Services;
