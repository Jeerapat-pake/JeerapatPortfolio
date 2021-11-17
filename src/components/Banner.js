import React from "react";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <div
      id="hero"
      className="bg-gradient-to-r from-purple-500 to-purple-800 text-white "
    >
      <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center h-full ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-2 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium ">
            Hi, I'm Jeerpat
          </h1>
          <p className="font-bold text-lg mb-2">
            Business Analyst and UI Designer
          </p>
          <p className="mb-8 leading-relaxed lg:text-justify">
            I currently work as a Business analyst, In my role, I frequently
            collaborate with other business analysts and UX/UI Designers to
            define user problems and what is the best solution for fixing them,
            prepare functional and technical documents, coordinate with
            developer to clarify the business flow, create SIT/UAT test script
            to deliver the software product.
          </p>
          <div className="flex justify-center ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="inline-flex text-purple-500 bg-white border-2 py-2 px-6 mr-6  hover:bg-purple-100 rounded-full text-lg"
            >
              Work With Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className="inline-flex text-white border-2 bg-none border-0 py-2 px-6  hover:bg-gray-200   hover:text-purple-700 rounded-full text-lg"
            >
              See My Port
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
