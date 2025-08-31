import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Locations from './components/Locations';
import Experience from './components/Experience';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Experience />
      <Locations />
      <Team />
      <Events />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
}

export default App;