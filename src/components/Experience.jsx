import React from "react";
import Section from "./Section";
import Title from "./Title";

export default function Experience() {
  const experiences = [
    {
      company: "PT. Djelas Tanda Tangan Bersama",
      period: "Jan 2022 - Present",
      position: "Web Developer",
      type: "Fulltime",
      based: "South Jakarta",
      jobDesc: [
        "Discussing project objectives with the project manager and development team.",
        "Building, managing and maintaining web based applications.",
        "Identifying and troubleshooting issues in implementation and debug builds.",
        "Conducting testing to ensure functionality for both users and the backend.",
        "Presenting progress and work in meetings with clients and management.",
      ],
    },
    // {
    //   company: "PT. Immobi Solusi Prima",
    //   period: "Feb 2023 - Mei 2023",
    //   position: "Fullstack Developer",
    //   type: "Parttime",
    //   based: "South Jakarta",
    //   jobDesc: [
    //     "Discussing project objectives with the project manager and development team.",
    //     "Building, managing and maintaining web based applications.",
    //     "Identifying and troubleshooting issues in implementation and debug builds.",
    //     "Conducting testing to ensure functionality for both users and the backend.",
    //   ],
    // },
    {
      company: "PT. Hedo Global Technology",
      period: "Jan 2021 - Dec 2021",
      position: "Web Developer",
      type: "Fulltime",
      based: "Palembang",
      jobDesc: [
        "Discussing project objectives with the project manager and development team.",
        "Building, managing and maintaining web based applications.",
        "Identifying and troubleshooting issues in implementation and debug builds.",
        "Conducting testing to ensure functionality for both users and the backend.",
        "Presenting progress and work in meetings with clients and management.",
      ],
    },
  ];
  return (
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
  );
}
