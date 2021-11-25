import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

export default Navbar;
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { menu: "About Me", href: "about" },
    { menu: "My Skills", href: "skills" },
    { menu: "My Projects", href: "projects" },
    { menu: "Contact", href: "contact" },
  ];

  return (
    <div>
      <div className="bg-white shadow-md fixed w-full">
        <div className="  px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 sm:mx-auto"
                  src="./logo.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="hidden lg:block ">
              <div className="ml-10 flex items-baseline space-x-4 ">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    smooth={true}
                    spy={true}
                    className=" hover:bg-purple-500 text-gray-500 hover:text-white px-3 py-2 rounded-md  font-medium"
                  >
                    {item.menu}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-500 focus:outline-none  focus:ring-offset-purple-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    to={item.href}
                    spy={true}
                    smooth={true}
                    className="hover:bg-purple-500 text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.menu}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}
