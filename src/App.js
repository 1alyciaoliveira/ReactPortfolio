import React from 'react'
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/about/AboutMe';
import Contact from './components/contact/ContactMe';
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Contact />
      <Portfolio />
    </div>
    
  );
}

export default App;
