import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import Section from "./Section";

export default function Contact() {
  return (
    <Section className="bg-red-500 py-20">
      <span className="text-center text-white lg:text-2xl">
        Want to reach me out? <RiMailSendLine className="inline" /> email me at{" "}
        <a
          href="mailto:randijulio13@gmail.com"
          className="font-bold underline outline-none"
        >
          randijulio13@gmail.com
        </a>
      </span>
    </Section>
  );
}
