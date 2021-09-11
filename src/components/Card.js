import React from "react";

export default function Card() {
  return (
    <section className="container px-6 py-4 mx-auto">
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-md shadow-sm  dark:bg-gray-800">
          <div className="p-3 mr-4 rounded-full text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>

            <div>
              <p className="my-3 text-lg font-semibold text-green-500">
                Developer API
              </p>
              <p className="text-sm font-normal text-gray-900">
                Well documented developer API
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
