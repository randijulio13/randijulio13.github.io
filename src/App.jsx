import React from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";

export default function App() {
  return (
    <>
      <Hero />
      <Skill />
      <Experience />
      {/* <Portfolio /> */}
      <Contact />
    </>
  );
}
