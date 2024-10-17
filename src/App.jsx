import About from "./Components/About";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import { ServiceCard } from "./Components/ServiceCard";
import OurServices from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Values from "./Components/Values";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
      <div className="relative">
      <Hero/>
      </div>
      <div className="md:absolute w-full transform md:-bottom-32">
      <Values/>
      </div>
      <ServiceCard />
      <About/>
      <OurServices/>
      <Offers />
      <Testimonial/>
      <Contact/>
      <Footer />
    </main>
  );
}