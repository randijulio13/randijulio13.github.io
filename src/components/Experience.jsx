import React from "react";
import Section from "./Section";
import Title from "./Title";

export default function Experience() {
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
