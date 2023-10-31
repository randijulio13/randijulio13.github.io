import React from "react";
import {
  SiBootstrap,
  SiCodeigniter,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";
import Section from "./Section";
import Title from "./Title";

export default function Skill() {
  const skills = [
    {
      title: "PROGRAMMING LANGUAGE",
      list: [
        { icon: <SiPhp />, title: "PHP" },
        { icon: <SiJavascript />, title: "Javascript" },
        { icon: <SiGo />, title: "Golang" },
      ],
    },
    {
      title: "BACKEND FRAMEWORK",
      list: [
        { icon: <SiLaravel />, title: "Laravel" },
        { icon: <SiExpress />, title: "ExpressJS" },
        { icon: <SiGo />, title: "GoFiber" },
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
        { icon: <SiRedis />, title: "Redis" },
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
        { icon: <SiElasticsearch />, title: "Elasticsearch" },
      ],
    },
  ];
  return (
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
                      className="flex items-center gap-x-2 px-2 text-lg duration-300 hover:scale-110 hover:cursor-pointer hover:text-red-500"
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
  );
}
