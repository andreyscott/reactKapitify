import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import ImgSlider from './components/slider/Img-slider';
import Footer from './footer/Footer';


function App() {
    return (
      <div className='app'>
     <Navbar />
     <ImgSlider />
     <h3>some body text will go here</h3>
      <Footer />
  
      </div>
  )
}

export default App;

