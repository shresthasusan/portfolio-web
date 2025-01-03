import { Github01Icon, Linkedin01Icon } from "hugeicons-react";
import React from "react";
import Languages from "./languages";

const AboutText = () => {
  return (
    <div className="about-content-text ">
      <p className="text-6xl font-bold flex items-center w-full text-neutral-300">
        About<span className="text-primary">.</span>
        <span className="flex items-center ml-5 align-middle justify-center bg-accent h-[1px] w-full"></span>
      </p>
      <div className="flex gap-20">
        <div className="md:w-2/3">
          <p className="text-xl text-neutral-300 mt-10 ">
            <span className="bg-primary float-left text-3xl rounded-md py-2 px-4  mx-1">
              H
            </span>
            ey! I&apos;m Susan, and I&apos;ve been curious about web development
            since middle school. I officially got into it at 15, and ever since,
            it&apos;s been a journey of learning, building, and exploring.
            <br />
            <br />
            When I&apos;m not coding, you&apos;ll find me playing guitar,
            staring at the sky, or getting lost in the world of arts and
            science. I enjoy diving into movies and series every now and then –
            it&apos;s a nice way to unwind and spark new ideas.
            <br />
            <br />
            I&apos;m always excited to learn something new, whether it&apos;s a
            cool framework or a random fact about the universe. If you&apos;re
            working on something creative or techy, let&apos;s connect –
            I&apos;m always up for new opportunities and collaborations!
          </p>
          <p className="text-accent mt-5 flex items-center gap-2">
            My Links &rarr;
            <span className="flex items-center gap-4  ">
              <Github01Icon size={24} />
              <Linkedin01Icon size={24} />
            </span>
          </p>
        </div>
        <Languages />
      </div>
    </div>
  );
};

export default AboutText;
