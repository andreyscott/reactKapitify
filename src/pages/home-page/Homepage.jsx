import React from 'react';
import ImageSlider from '../../components/ImageSlider/index';
import How from '../../components/howItWorks/how';
import Blog from '../../components/blogDisplay/blog';
import Footer from '../../components/footer/Footer'


function HomePage() {
    return (
        <div className="home">
        <div className='home_container'>
        <ImageSlider />
     <How />
     <Blog />
      <Footer />

        </div>
        </div>
    )
}

export default HomePage;
