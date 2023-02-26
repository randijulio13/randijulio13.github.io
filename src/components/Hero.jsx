import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import {
    SiGithub,
    SiInstagram, SiLinkedin
} from "react-icons/si";
import Section from "./Section";
import Title from "./Title";


export default function Hero() {
  const contacts = [
    {
      title: "Linkedin",
      icon: <SiLinkedin />,
      link: "https://linkedin.com/in/randi-yulio-fajri",
    },
    {
      title: "GitHub",
      icon: <SiGithub />,
      link: "https://github.com/randijulio13",
    },
    {
      title: "Instagram",
      icon: <SiInstagram />,
      link: "https://instagram.com/randijuliofajri",
    },
    {
      title: "Instagram",
      icon: <RiMailSendLine />,
      link: "mailto:randijulio13@gmail.com",
    },
  ];
  return (
    <Section className="h-screen bg-white">
      <Title className="hover:cursor-pointer">
        Hi, I'm <span className="text-red-500">RANDI YULIO FAJRI</span>
      </Title>
      <span className="text-center text-lg text-black">
        A Fullstack Web Developer
      </span>
      <a
        href="/RandiYulioFajri.pdf"
        target="_blank"
        download={true}
        className="my-6 rounded-full border border-black px-6 py-2 outline-none duration-300 hover:bg-black hover:px-8 hover:text-white"
      >
        Download CV
      </a>
      <div className="flex gap-x-2">
        {contacts.map((contact, index) => {
          return (
            <a
              href={contact.link}
              target="_blank"
              key={index}
              className="rounded-full p-3 outline-none duration-300 hover:scale-110 hover:bg-gray-100 active:scale-100 active:bg-black active:text-white"
            >
              {contact.icon}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
