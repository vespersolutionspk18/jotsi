import AboutUs from "./homecomponents/AboutUs";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./homecomponents/Hero";
import { Star } from "./components/Star";
import Services from "./components/Services";
import PostServices from "./components/PostServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Numbers from "./homecomponents/Numbers";

export default function Home() {
  return (
    <>
      <div className="bg-stone-50 p-4">
        <Header />
        <Hero />
        <AboutUs />
        <Numbers />
      </div>
    
      <div className="bg-stone-50 p-4">
        <Services />
        <PostServices/>
        <Cta/>
        <Footer/>

      </div>
    </>
  );
}
