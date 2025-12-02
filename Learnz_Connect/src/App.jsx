import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutTutor from "./components/AboutTutor";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Connect from "./components/Connect";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <AboutTutor/>
        <Skills />
        <Projects />
        <Certificates/>
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
