import React, { useEffect } from "react";
import Preloader from "../src/Pre";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Componets/Home/Home";
import Projects from "./Componets/Projects/Project";
import About from "./Componets/About/About";
import ResumeNew from "./Componets/Resume/ResumeNew";
import NavBar from "./Navbar";
import Footer from "./Footer";
import useAppStore from "./store/useAppStore";


function App() {
  const { load, setLoad } = useAppStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [setLoad]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
