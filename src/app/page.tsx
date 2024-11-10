"use client"
import Navbar from "./components/navbar";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./components/footer";

const Page = () => {

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
        <Projects />
      </section>

      <Footer />
    </div>
  );
};

export default Page;
