import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/Contactform';

function App() {
  return (
    <div className="App">
      <title>Testing Services made simple</title>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <footer className="bg-dark text-white text-center">
        <p>&copy; 2025 Testing Experts</p>
    </footer>
    </div>
  );
}

export default App;