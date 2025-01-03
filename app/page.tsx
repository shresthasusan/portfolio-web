import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutText from "./components/about-section/aboutText";
import HeroSection from "./components/heroSection";
import SideNav from "./components/sideNav";
import Projects from "./components/projects/projects";
import Education from "./components/education";

const page = () => {
  return (
    <>
      <SideNav />
      <div className="body w-full relative">
        <Navbar />
        <div className=" flex flex-col mt-[72px] items-center justify-center">
          <main className="flex flex-col gap-10  mt-16  max-w-screen-2xl w-full px-4">
            <div className="hero-section flex flex-col overflow-hidden min-h-screen">
              <HeroSection />
            </div>
            <div className="about-section flex flex-col gap-10 min-h-screen">
              <AboutText />
            </div>
            <div className="projects-section flex flex-col gap-10 min-h-screen">
              <Projects />
            </div>
            <div className="education-section flex flex-col gap-10 min-h-screen">
              <Education />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
