import React from "react";
import "../src/App.css";
import "@fontsource/sora";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProjectGallery from "./components/ProjectGallery";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <LandingPage/>
        <AboutMe/>
        <ProjectGallery/>
        <ContactMe/>
        <Footer/>
    </div>
  );
}

export default App;
