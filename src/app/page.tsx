import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Team from "@/sections/Team";
import Stories from "@/sections/Stories";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Team />
        <Stories />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
