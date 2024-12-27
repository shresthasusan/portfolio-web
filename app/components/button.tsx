"use client";

import React from "react";

interface ButtonProps {
  string: string;
  className?: string;
  htmlFor: string;
}

const Button = ({ string, className, htmlFor }: ButtonProps) => {
  return (
    <a
      className={`btn ${className} relative w-40  z-0  overflow-hidden rounded-md px-5 py-3 font-medium  transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:transition-transform before:duration-1000 before:content-[&quot;&quot;] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 bg-indigo-500 text-zinc-100  border-indigo-500 block`}
      href={`#${htmlFor}`}
    >
      {string}
    </a>
  );
};

export default Button;
