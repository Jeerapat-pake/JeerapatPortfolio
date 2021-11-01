import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-black  body-font pt-10">
      <div className="container px-5 py-10 mx-auto text-center lg:px-16">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-purple-700" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-700">
            Projects
          </h1>
        </div>
        {/* <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
        <div className="flex flex-wrap ">
          {projects.map((project) => (
            <div className="grid mb-8 flex items-center bg-gray-100 shadow-xl rounded-lg md:mx-4">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
                <div className="p-12 mr-4">
                  <p className="text-purple-800 my-4">{project.subtitle}</p>
                  <p className="my-4 text-2xl font-semibold text-black">
                    {project.title}
                  </p>
                  <p className="text-sm font-normal text-gray-900 my-4 text-left">
                    <ul>
                      {project.description.map((desc) => (
                        <li>{desc}</li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-800 m-0 rounded-r-lg flex">
                  <img
                    src={project.image}
                    alt="project list"
                    className="p-12 rounded items-center justify-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
