import AboutUs from "./homecomponents/AboutUs";

import Header from "./components/Header";
import Hero from "./homecomponents/Hero";

import Services from "./homecomponents/Services";
import Testimonials from "./homecomponents/Testimonials";

import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Numbers from "./homecomponents/Numbers";


export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
      <div className="bg-stone-50 p-4">
        <Header />
        <Hero />
        <AboutUs />
        <Numbers />
      </div>
    
      <div className="bg-stone-50 -pb-4 px-4">
        <Services />
        <Testimonials />
      </div>

      <Cta/>
        <Footer/>
      </div>
    </>
  );
}
