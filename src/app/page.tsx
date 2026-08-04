"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/footer";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Education from "./education/page";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div>
      <Navbar />

      <section>
        <Home />  
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skills/>
      </section>

      <section>
        <Education />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <Projects />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
