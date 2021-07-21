import React from 'react';
import ImgSlider from '../../components/slider/Img-slider';
import How from '../../components/howItWorks/how';
import Blog from '../../components/blogDisplay/blog'
import Footer from '../../components/footer/Footer';

function HomePage() {
    return (
        <div className="home">s
     <ImgSlider />
     <How />
     <Blog />
      <Footer />
        </div>
    )
}

export default HomePage;
