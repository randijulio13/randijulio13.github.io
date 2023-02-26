import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import Title from "./Title";
import Rellax from "rellax";

export default function Portfolio() {
  const portRef = useRef();
  useEffect(() => {
    function onScroll() {}

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e) => {
    console.log(e.getBoundingClientRect().top);
  };

  const portfolios = [
    {
      title: "Woii",
      image: [
        { src: "/woii_desktop.png", alt: "woii_desktop" },
        { src: "/woii_mobile.png", alt: "woii_mobile" },
      ],
    },
  ];

  return (
    <Section className="min-h-screen space-y-20 bg-black py-20" ref={portRef}>
      <Title className="text-white">Portfolios</Title>
      {portfolios.map((port, index) => {
        return (
          <div className="relative flex min-h-screen w-full items-center" key={index}>
            <div className="flex min-h-full basis-2/5 items-center ml-10">
              <span className="font-title text-2xl text-white">
                {port.title}
              </span>
            </div>
            <div className="relative h-full basis-3/5 bg-blue-500">
              <img
                src={port.image[0].src}
                alt={port.image[0].alt}
                className="w-full rounded shadow-2xl"
              />
              <img
                src={port.image[1].src}
                alt={port.image[1].alt}
                className="rellax absolute -top-10 right-10 rounded shadow-2xl"
              />
            </div>
          </div>
        );
      })}
    </Section>
  );
}
