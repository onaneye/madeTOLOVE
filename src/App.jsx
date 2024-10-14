import About from "./Components/About";
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import { ServiceCard } from "./Components/ServiceCard";
import OurServices from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Values from "./Components/Values";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main className="">
      <Navbar/>
      <div>
      <Hero/>
      <Values/>
      </div>
      <ServiceCard />
      <About/>
      <OurServices/>
      <Offers />
      <Testimonial/>
      <Footer />
    </main>
  );
}