import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
// import ChooseMe from "./components/ChooseMe";
import Portfolio from "./components/Portfolio";
import BlogSection from "./components/BlogSection";
import Testimonial from "./components/Testimonial"; // optional
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      {/* <ChooseMe /> */}
      <Portfolio />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}
