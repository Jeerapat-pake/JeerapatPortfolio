import React from "react";
import { UserIcon } from "@heroicons/react/solid";
import { User } from "heroicons-react";

export default function About() {
  return (
    <section
      className="bg-white text-gray-800 m-auto p-6 lg:py-0 lg:px-12"
      id="about"
    >
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="m-auto p-8">
            <img src="./about.png" alt=""></img>
          </div>
          <div className="my-auto pt-4 lg:px-8 md:px-1">
            <div className="flex flex-col w-full mb-4">
              <UserIcon className="mx-auto inline-block w-10 mb-4 text-purple-700" />
              <h1 className=" mx-auto text-4xl font-bold title-font mb-4 text-purple-700">
                About Me
              </h1>
            </div>

            <p className="text-lg">
              I currently work as a Business analyst, In my role, I frequently
              collaborate with other business analysts and UX/UI Designers to
              define user problems and what is the best solution for fixing
              them, prepare functional and technical documents, coordinate with
              developer to clarify the business flow, create SIT/UAT test script
              to deliver the software product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
