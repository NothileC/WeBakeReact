import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import WhyChoose from './pages/WhyChoose/WhyChoose';
import Footer from './pages/Footer/Footer';





const App = () => {





  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Homepage />
      <About />
      <Menu  />
      <WhyChoose />
      <Footer />

    </div>
  );
};

export default App;
