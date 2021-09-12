import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  const navlists = [
    { name: "Skills", href: "#" },
    { name: "Project", href: "#" },
    { name: "Contact Me", href: "#" },
  ];

  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-purple-800 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jeerapat
          </a>
        </a>

        <nav className="md:ml-auto md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {navlists.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mr-10  text-grey-900 font-semibold hover:text-purple-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
