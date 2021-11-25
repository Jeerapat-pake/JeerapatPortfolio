import React from "react";
import { skills } from "../data";
import { BadgeCheckIcon } from "@heroicons/react/solid";
export default function Skills() {
  return (
    <section
      id="skills"
      className=" text-black pt-10 "
      style={{ backgroundColor: "#f4f7fa" }}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <BadgeCheckIcon className="mx-auto inline-block w-10 mb-4 text-purple-700" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font text-purple-700 mb-6">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
        </div>

        {/* Skills Card */}
        <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {skills.map((skill) => (
            <div className="flex ">
              <div className="justify-center  mx-auto text-center bg-white filter drop-shadow-sm  rounded-md p-8">
                <img
                  alt="icon"
                  className="w-12 h-12 mx-auto"
                  src={skill.icon}
                />
                <div>
                  <p className="my-3 text-xl font-semibold text-purple-700 ">
                    {skill.title}
                  </p>
                  <p className="text-base font-normal text-gray-900">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
