import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import {
  SiBootstrap,
  SiCodeigniter,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiInstagram,
  SiJavascript,
  SiLaravel,
  SiLinkedin,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";
import Section from "./components/Section";
import Title from "./components/Title";

export default function App() {
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

  const skills = [
    {
      title: "PROGRAMMING LANGUAGE",
      list: [
        { icon: <SiPhp />, title: "PHP" },
        { icon: <SiJavascript />, title: "Javascript" },
      ],
    },
    {
      title: "BACKEND FRAMEWORK",
      list: [
        { icon: <SiLaravel />, title: "Laravel" },
        { icon: <SiCodeigniter />, title: "Codeigniter" },
        { icon: <SiExpress />, title: "ExpressJS" },
      ],
    },
    {
      title: "FRONTEND FRAMEWORK",
      list: [
        { icon: <SiReact />, title: "ReactJS" },
        { icon: <SiVuedotjs />, title: "VueJS" },
      ],
    },
    {
      title: "CSS FRAMEWORK",
      list: [
        { icon: <SiBootstrap />, title: "Bootstrap" },
        { icon: <SiTailwindcss />, title: "Tailwind" },
      ],
    },
    {
      title: "DATABASES",
      list: [
        { icon: <SiMariadb />, title: "MariaDB" },
        { icon: <SiMysql />, title: "MySQL" },
        { icon: <SiPostgresql />, title: "PostgreSQL" },
        { icon: <SiMongodb />, title: "MongoDB" },
      ],
    },
    {
      title: "OTHERS",
      list: [
        { icon: <SiVisualstudiocode />, title: "VS Code" },
        { icon: <SiDocker />, title: "Docker" },
        { icon: <SiRabbitmq />, title: "RabbitMQ" },
        { icon: <SiFirebase />, title: "Firebase" },
        { icon: <SiGit />, title: "GIT Version Control" },
      ],
    },
  ];

  const experiences = [
    {
      company: "PT. Digital Data Teknologi Terdepan",
      period: "Jan 2022 - Present",
      position: "Web Developer",
      type: "Fulltime",
      based: "South Jakarta",
      jobDesc: [
        "Discussing project aims with the project manager and development team.",
        "Designing and building web applications using Laravel.",
        "Creating microservice application using Laravel and RabbitMQ.",
        "Troubleshooting issues in the implementation and debug builds.",
        "Working with UI/UX designers on projects.",
        "Testing functionality for users and the backend.",
        "Designing database schema.",
        "Scaling projects based on client feedback.",
        "Maintaining web-based applications.",
        "Presenting work in meetings with clients and management.",
      ],
    },
    {
      company: "PT. Hedo Global Technology",
      period: "Jan 2021 - Dec 2021",
      position: "Web Developer",
      type: "Fulltime",
      based: "Palembang",
      jobDesc: [
        "Discussing project aims with the project manager and development team.",
        "Designing and building web applications using Laravel.",
        "Creating microservice application using Laravel and RabbitMQ.",
        "Troubleshooting issues in the implementation and debug builds.",
        "Working with UI/UX designers on projects.",
        "Testing functionality for users and the backend.",
        "Designing database schema.",
        "Scaling projects based on client feedback.",
        "Maintaining web-based applications.",
        "Presenting work in meetings with clients and management.",
      ],
    },
  ];

  return (
    <>
      <Section className="h-screen bg-white">
        <Title>
          Hi, I'm <span className="text-red-500">RANDI YULIO FAJRI</span>
        </Title>
        <span className="text-center text-lg text-black">
          A Fullstack Web Developer
        </span>
        <a href="/RandiYulioFajri.pdf" target="_blank" download={true} className="my-6 rounded-full border border-black px-6 py-2 outline-none duration-300 hover:bg-black hover:px-8 hover:text-white">
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
      <Section className="min-h-screen space-y-8 bg-black py-20">
        <Title className="text-white">
          SKILLS AND <span className="text-red-500">KNOWLEDGE</span>
        </Title>
        <div className="flex flex-col items-center justify-center space-y-6 text-white">
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <h2 className="text-center text-sm text-white/50">
                  {skill.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                  {skill.list.map((l, i) => {
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-x-2 px-2 text-lg duration-300 hover:scale-110 hover:text-red-500"
                      >
                        <span className="text-2xl">{l.icon}</span> {l.title}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="min-h-screen space-y-8 py-20">
        <Title>
          Work <span className="text-red-500">Experience</span>
        </Title>
        <div className="flex flex-col items-center justify-center space-y-14">
          {experiences.map((exp, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-black/50">{exp.period}</span>
                <span className="text-center text-xl">
                  {exp.position} at{" "}
                  <span className="font-bold">{exp.company}</span>
                </span>
                <div className="flex divide-x">
                  <span className="px-2 text-black/50">{exp.type}</span>
                  <span className="px-2 text-black/50">{exp.based}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
      <Section className="min-h-screen bg-black py-20">
        <Title className="text-white">Portfolios</Title>
      </Section>
      <Section className="bg-red-500 py-20">
        <span className="text-center text-white lg:text-2xl">
          Want to reach me out? <RiMailSendLine className="inline" /> email me
          at{" "}
          <a
            href="mailto:randijulio13@gmail.com"
            className="font-bold underline outline-none"
          >
            randijulio13@gmail.com
          </a>
        </span>
      </Section>
    </>
  );
}
