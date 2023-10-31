import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import Title from "./Title";
import Rellax from "rellax";
import {
  SiAdonisjs,
  SiAntdesign,
  SiElasticsearch,
  SiFirebase,
  SiLaravel,
  SiMaterialui,
  SiMysql,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

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
      type: "Fun Project",
      description:
        "A serverless web application built with ReactJS and Firebase Firestore inspired by Pinterest. I created this web app just for fun in my spare time.",
      techstack: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
      ],
      url: "https://woii.netlify.app",
      image: {
        desktop: {
          src: "/woii_desktop.png",
          alt: "woii_desktop",
        },
        mobile: { src: "/woii_mobile.png", alt: "woii_mobile" },
      },
    },
    {
      title: "Footprint",
      type: "Fun Project",
      description:
        "A serverless web application built with ReactJS and Firebase Firestore inspired by Facebook. I created this web app just for fun in my spare time.",
      techstack: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "MaterialUI", icon: <SiMaterialui /> },
      ],
      url: "https://poopprint.netlify.app",
      image: {
        desktop: {
          src: "/footprint_desktop.png",
          alt: "footprint_desktop",
        },
        mobile: {
          src: "/footprint_mobile.png",
          alt: "footprint_mobile",
        },
      },
    },

    {
      title: "Digital Wedding Invitation",
      type: "Side Project",
      description:
        "A digital wedding invitation with Guest list management.",
      techstack: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
      ],
      url: "https://dinna-yuni.netlify.app",
      image: {
        desktop: {
          src: "/wedding_desktop.png",
          alt: "wedding_desktop",
        },
        mobile: {
          src: "/wedding_mobile.png",
          alt: "wedding_mobile",
        },
      },
    },
    {
      title: "IndoRentals",
      type: "Company Product",
      description:
        "A Software as a Service that verifies borrowers' data through E-KYC (onboarding process). This app is built using the Laravel Framework.",
      techstack: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      image: {
        desktop: {
          src: "/indorentals_desktop.png",
          alt: "indorentals_desktop",
        },
        mobile: {
          src: "/indorentals_mobile.png",
          alt: "indorentals_mobile",
        },
      },
    },
    {
      title: "Realviux",
      type: "Company Product",
      description:
        "A visualization platform to build your dashboard fast and easily with rich options visualization, connect any data source, and customize queries with SQL editor which will make it easy to integrate & explore data and available with alert notification & scheduler report. This app is built using ReactJS Frontend and AdonisJS Backend.",
      techstack: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "AdonisJS", icon: <SiAdonisjs /> },
        { name: "AntDesign", icon: <SiAntdesign /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      image: {
        desktop: {
          src: "/realviux_desktop.png",
          alt: "realviux_desktop",
        },
      },
    },
    {
      title: "[ non disclosure agreement ]",
      type: "Company Product",
      description:
        "A Software as a Service that verifies customer data through E-KYC (onboarding process), checks customer Credit Score, and generates Digital Signature Certificates. This app is built using the Laravel Framework.",
      techstack: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "[ non disclosure agreement ]",
      type: "Company Project",
      description:
        "A microservice application with an event-driven architecture, utilizing RabbitMQ for data transfer, designed to validate company employee data. This app is built using the Laravel Framework.",
      techstack: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "RabbitMQ", icon: <SiRabbitmq /> },
      ],
    },
    {
      title: "[ non disclosure agreement ]",
      type: "Company Project",
      description:
        "A web application with a primary feature that I cannot disclose, alongside other complex functionalities such as activity logs, user management, client management, and role management. This app is built using the Laravel Framework and Livewire.",
      techstack: [
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "Livewire", icon: <SiLaravel /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "RabbitMQ", icon: <SiRabbitmq /> },
        { name: "Elasticsearch", icon: <SiElasticsearch /> },
      ],
    },
  ];

  return (
    <Section className="min-h-screen bg-black py-20" ref={portRef}>
      <Title className="text-white">Portfolios</Title>
      {portfolios.map((port, index) => {
        return (
          <div
            className="relative w-full items-center py-20 lg:flex"
            key={index}
          >
            {port.image && (
              <div className="relative h-full scale-90 lg:basis-3/5 hover:scale-105 duration-200">
                {port.image.desktop && (
                  <img
                    src={port.image.desktop.src}
                    alt={port.image.desktop.alt}
                    className="w-full rounded-lg shadow-2xl"
                  />
                )}
                {port.image.mobile && (
                  <img
                    src={port.image.mobile.src}
                    alt={port.image.mobile.alt}
                    className="absolute -top-[10%] right-10 w-1/3 rounded shadow"
                  />
                )}
              </div>
            )}
            <div className="ml-10 mr-10 mt-10 flex min-h-full flex-col justify-center gap-2 text-center lg:order-first lg:mt-0 lg:basis-2/5 lg:text-left">
              <div className="flex flex-col">
                <span className="font-title text-4xl uppercase tracking-widest text-white">
                  {port.title}
                </span>
                <span className="text-white/60">{port.type}</span>
              </div>
              <p className="text-white/70">{port.description}</p>
              <div className="my-2 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-start">
                {port.techstack.map((l, i) => {
                  return (
                    <span
                      key={i}
                      className="flex gap-x-2 text-white duration-300 hover:scale-105 hover:cursor-pointer hover:text-red-500"
                    >
                      <span className="text-2xl">{l.icon}</span> {l.name}
                    </span>
                  );
                })}
              </div>
              {port.url && (
                <div className="mt-2">
                  <a
                    href={port.url}
                    target="_blank"
                    className="items-start rounded bg-red-500 px-4 py-2 text-white duration-200 hover:bg-red-600 hover:px-10"
                  >
                    Open
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
