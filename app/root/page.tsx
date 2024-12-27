import React from "react";
import {
  Linkedin01Icon,
  MailEdit02Icon,
  NewTwitterEllipseIcon,
  SourceCodeCircleIcon,
} from "hugeicons-react";
import TypingAnimation from "../components/typingAnimation";
import DottedBg from "../components/dottedBg";
import Button from "../components/button";

const page = () => {
  return (
    <>
      <div className="side-nav bg-black sticky top-0 w-16 h-screen"></div>
      <div className="body w-full relative">
        <div className="nav-section h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
          <div className="flex items-center text-lg gap-4">
            <a
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="nofollow"
              href="https://www.linkedin.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="nofollow"
              href="https://www.github.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="nofollow"
              href="https://www.x.com"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
            <a
              className="text-zinc-300 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="nofollow"
              href="https://www.codepen.io"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z"></path>
              </svg>
            </a>
          </div>
          <button className='relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px] border-white px-4 py-2 font-medium text-sm text-white transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[""] hover:text-zinc-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95'>
            <span>Resume</span>
          </button>
        </div>
        <div className=" flex flex-col mt-[72px] items-center justify-center">
          <main className="flex flex-col gap-40  mt-16  max-w-[1400px]">
            <div className="hero-section flex flex-col relative">
              <span className="text-section z-10 ">
                <div className="text-white text-9xl font-black">
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
                  I&apos;m a{" "}
                  <span className="text-primary">Front End Developer</span>
                </p>
                <p className="text-xl text-neutral-300 mt-5">
                  &quot;Turning Curiosity into Code – Building Digital Solutions
                  One Line at a Time.&quot;
                </p>
                <p className="text-neutral-300 mt-2">
                  <span className="italic">Aspiring Developer </span> |
                  <span className="italic"> Eager Learner</span> |
                  <span className="italic">
                    {" "}
                    Crafting Projects with Passion and Precision
                  </span>
                  <br /> <br /> <br />
                  <Button string={"View Projects"} htmlFor={"about"} />
                </p>
              </span>
              <DottedBg />
            </div>

            <div className="about-section flex flex-col gap-10">
              <div className="about-content-text mt-64">
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
                      ey! I&apos;m Susan, and I&apos;ve been curious about web
                      development since middle school. I officially got into it
                      at 15, and ever since, it&apos;s been a journey of
                      learning, building, and exploring.
                      <br />
                      <br />
                      When I&apos;m not coding, you&apos;ll find me playing
                      guitar, staring at the sky, or getting lost in the world
                      of arts and science. I enjoy diving into movies and series
                      every now and then – it&apos;s a nice way to unwind and
                      spark new ideas.
                      <br />
                      <br />
                      I&apos;m always excited to learn something new, whether
                      it&apos;s a cool framework or a random fact about the
                      universe. If you&apos;re working on something creative or
                      techy, let&apos;s connect – I&apos;m always up for new
                      opportunities and collaborations!
                    </p>
                  </div>
                  <div className="flex flex-col gap-10 mt-10 max-w-96 ">
                    <div className="flex flex-col">
                      <div className="flex items-center no-wrap gap-2 font-bold text-xl">
                        <SourceCodeCircleIcon size={24} color={"#a5b4fc"} />{" "}
                        Laguauges I have used
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm mt-5">
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Python
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          C++
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          JavaScript
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          TypeScript
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          C
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          SQL
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Next.js
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          React.js
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          React Native
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Node.js
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          NoSQL
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col text-neutral-300">
                      <div className="flex items-center no-wrap gap-2 font-bold text-xl">
                        <SourceCodeCircleIcon size={24} color={"#a5b4fc"} />{" "}
                        Next on my list
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm mt-5">
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Rust
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          GraphQl
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Prisma
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Docker
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Java
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          SQL
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          Ruby
                        </div>
                        <div className="bg-neutral-700 py-2 px-4 rounded-xl">
                          .Net
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="row-start-3 w-99 flex gap-6 flex-wrap  bottom-10 absolute bg-neutral-800 rounded-full p-4 items-center justify-center">
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
        </div>
      </div>
    </>
  );
};

export default page;
