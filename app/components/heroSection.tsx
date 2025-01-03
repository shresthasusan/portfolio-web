import React from "react";
import Button from "./button";
import DottedBg from "./dottedBg";
import TypingAnimation from "./typingAnimation";

const HeroSection = () => {
  return (
    <>
      <span className="text-section  ">
        <div className="text-white text-8xl relative z-10 w-fit font-black">
          <p>
            Hi, I&apos;m{" "}
            <TypingAnimation
              text={"Susan"}
              className={null}
              interval={146}
            ></TypingAnimation>
            {/* <TypingAnimation
                        text="Shrestha"
                        startDelay={900}
                        interval={146}
                        className={null}
                      ></TypingAnimation> */}
            <TypingAnimation
              text="."
              startDelay={1000}
              interval={146}
              className={"text-primary "}
            ></TypingAnimation>
          </p>
        </div>
        <p className="text-5xl mt-5 font-medium text-neutral-300">
          I&apos;m a <span className="text-primary">Front End Developer</span>
        </p>
        <p className="text-xl text-neutral-300 mt-5">
          &quot;Turning Curiosity into Code – Building Digital Solutions One
          Line at a Time.&quot;
        </p>
        <p className="text-neutral-300 mt-2">
          <span className="italic">Aspiring Developer </span> |
          <span className="italic"> Eager Learner</span> |
          <span className="italic">
            {" "}
            Crafting Projects with Passion and Precision
          </span>
          <br /> <br /> <br />
          <Button
            string={"View Projects"}
            className="z-10 w-fit"
            htmlFor={"about"}
          />
        </p>
      </span>
      <DottedBg />
    </>
  );
};

export default HeroSection;
