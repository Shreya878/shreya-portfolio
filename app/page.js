import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0a192f] text-white">

        <Hero />

        <About />

        <Skills />
          
        <Projects /> 

        <Certificates /> 

       <Contact />   

      </main>

       <Footer /> 
    </>
  );
}  