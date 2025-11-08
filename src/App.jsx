import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  // ✅ unified header
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Techstack from "./pages/Techstack";
import Team from "./pages/Team";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton ";

const App = () => {
  return (
    <main className="bg-slate-300/20 min-h-screen flex flex-col">
      <Router>
        {/* ✅ Use Smart Header that detects route */}
        <Header />

        {/* ✅ Your main route pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/techstack" element={<Techstack />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
        <WhatsAppButton/>
      </Router>
    </main>
  );
};

export default App;
