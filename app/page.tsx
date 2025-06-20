
import AboutUs from "./components/AboutUs";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Star } from "./components/Star";

export default function Home() {
  return (
    <>
   <div className="bg-stone-100 p-4">
  <Header/>
  <Hero/>
  <AboutUs/>
  <Star/>
   </div>
   
   
    </>
  );
}
