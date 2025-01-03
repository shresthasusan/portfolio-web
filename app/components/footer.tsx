import {
  Linkedin01Icon,
  MailEdit02Icon,
  NewTwitterEllipseIcon,
} from "hugeicons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="row-start-3 w-99 flex gap-6 flex-wrap  bottom-10 sticky bg-neutral-800 rounded-full p-4 items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/susan-shrestha5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin01Icon size={24} color={"#a5b4fc"} />
        Linkedin
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NewTwitterEllipseIcon size={24} color={"#a5b4fc"} />X
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https:shresthasusan44@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailEdit02Icon size={24} color={"#a5b4fc"} />
        shresthasusan44@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
