import AboutUs from "./components/AboutUs";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Star } from "./components/Star";
import Services from "./components/Services";
import PostServices from "./components/PostServices";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-stone-100 p-4">
        <Header />
        <Hero />
        <AboutUs />
      </div>
      <div className="bg-stone-100 pl-4 py-4">
        <Star />
      </div>
      <div className="bg-stone-100 p-4">
        <Services />
        <PostServices/>
        <Cta/>
        <Footer/>

      </div>
    </>
  );
}
