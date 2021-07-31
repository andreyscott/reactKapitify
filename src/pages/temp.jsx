import React from 'react';
import ImageSlider from '../components/ImageSlider/index';
import Footer from '../data/Footer/index'


function Page() {
    return (
        <div className="home">
        <div className='home_container'>
        <ImageSlider />
     {/* <How />
     <Blog /> */}
      <Footer />

        </div>
        </div>
    )
}

export default Page;
