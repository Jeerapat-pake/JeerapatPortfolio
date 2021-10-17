import React from "react";

export default function Banner() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-purple-500 to-purple-800 text-white "
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium ">
            Hi, I'm Jeerpat
            <br className="hidden lg:inline-block" />
            Business Analyst at PEA
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Business Analyst, who collaborates closely with users, UX/UI
            designer, and the developer team to clarify what is the business
            solutions and the real user's needs
          </p>
          <div className="flex justify-center ">
            <a
              href="#contact"
              className="inline-flex text-purple-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex  bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
