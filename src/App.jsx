import React from "react";
import "./App.css";
import About from "./components/container/About";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer";
import Home from "./components/container/Home";
import Portfolio from "./components/container/Portfolio";
import Skills from "./components/container/Skills";
import Navbar from "./components/Navbar";
import Experience from "./components/container/Experience";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
