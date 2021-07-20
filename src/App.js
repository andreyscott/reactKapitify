import React from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import ImgSlider from './components/slider/Img-slider';
import How from './components/howItWorks/how';
import Blog from './components/blogDisplay/blog'
import Footer from './footer/Footer';


function App() {
    return (
      <div className='app'>
     <Navbar />
     <ImgSlider />
     <How />
     <Blog />
      <Footer />
  
      </div>
  )
}

export default App;

