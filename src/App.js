import React, { useEffect } from "react";
import { Expertise } from "./components/Expertise";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LatestProjects } from "./components/LatestProjects";
import { Qualification } from "./components/Qualification";
import { Specializing } from "./components/Specializing";
import { Testimonials } from "./components/Testimonials";
import AOS from "aos";
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

// video end at 3:00:42
