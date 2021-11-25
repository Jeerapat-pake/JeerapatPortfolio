import React from "react";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div
      id="hero"
      className="bg-gradient-to-r from-purple-500 to-purple-800 text-white "
    >
      <div className="container mx-auto flex px-8 pt-24 pb-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  sm:pr-4 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center ">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-extrabold ">
            Hello I'M A
          </h1>
          <p className="font-bold leading-normal text-4xl lg:text-6xl mb-8 text-center md:text-left ">
            <span className="text-yellow-400 underline">Business analyst</span>{" "}
            and UI Designer.
          </p>
          <p className="mb-8 text-center md:text-left text-lg">
            Hi, I'm Jeerapat Wuttisamanan. welcome to my portfolio
          </p>
          <div className="flex justify-center ">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="inline-flex text-purple-500 bg-white border-1 py-2 px-6 mr-6  hover:bg-purple-100 rounded-lg text-lg"
            >
              See My Portfolio
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 ">
          <img
            className="object-cover object-center rounded "
            alt="jeerapat wuttisamanan"
            src="./myprofile.png"
          />
        </div>
      </div>
    </div>
  );
}
