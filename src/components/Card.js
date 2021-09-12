import React from "react";

export default function Card() {
  return (
    <section className="container px-6 py-4 mx-auto">
      <div className="grid mb-4 flex items-center bg-gray-50 shadow-xl rounded-lg ">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
          <div className="p-12 mr-4">
            <p className="text-purple-800 my-4">Capital Project Management</p>
            <p className="my-4 text-2xl font-semibold text-black">
              Developer API
            </p>
            <p className="text-sm font-normal text-gray-900 my-4">Lorem</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-800 m-0 rounded-r-lg">
            <img src="../project-1.gif" className="p-10 " />
          </div>
        </div>
      </div>
    </section>
  );
}
