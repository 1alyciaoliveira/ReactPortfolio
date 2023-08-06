import React from 'react'
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Footer from './components/footer/Footer';
import Portfolio from './components/project/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<AboutMe />} />
          <Route exact path='/about-me' element={<AboutMe />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
