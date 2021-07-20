import React from 'react';
import './blog.css'

function blog() {
    return (
        <div className="blog-container">

        <section id="from-our-blog" className="section-spacer bg-very__gray">
<div className="container">
    <header className="section-header text-center">
        <h2 className="section-title">From Our Blog</h2>
        <p className="lead">
            We share very practical tips on how to grow your brand and business
        </p>
    </header>
    <div className="row" id="home-blog-post-thumbnails">
        <div id="loading" className="loading hidden">
            <div className="ripple ripple1"></div>
            <div className="ripple ripple2"></div>
            <div className="ripple ripple3"></div>
            <div className="ripple ripple4"></div>
        </div>
    </div>

    <div class="mt-40 text-center"><a href="https://andrewirorere.tech" class="btn btn-primary btn-lg">See now more posts</a>
</div>
</div>
</section>      

        </div>

    )
}

export default blog;
