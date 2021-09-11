import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Card from "./components/Card";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Card />
    </main>
  );
}
