import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
