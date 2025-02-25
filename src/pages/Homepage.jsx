import React, { useEffect } from "react";
import Hero from "../components/pages/home_page/Hero";
import Services from "../components/pages/home_page/Services";
import Contact from "../components/pages/home_page/Contact";
import Collage from "@/components/pages/global/Collage";

const Homepage = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const targetId = hash.substring(1);
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="About_US">
        <Collage bgColor="white" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Homepage;
