import React from "react";

export default function Title({ children, className }) {
  return (
    <span
      className={`text-center font-title text-3xl tracking-widest duration-200 hover:scale-105 lg:text-4xl ${className}`}
    >
      {children}
    </span>
  );
}
