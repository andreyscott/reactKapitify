import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import ImgSlider from './components/slider/Img-slider';
import How from './components/howItWorks/how'
import Footer from './footer/Footer';


function App() {
    return (
      <div className='app'>
     <Navbar />
     <ImgSlider />
     <How />
      <Footer />
  
      </div>
  )
}

export default App;

