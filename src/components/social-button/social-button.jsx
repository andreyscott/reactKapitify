import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';

import TwitterIcon from '@material-ui/icons/Twitter';

import InstagramIcon from '@material-ui/icons/Instagram';

import './social.css';


function Social() {
    return (
        <div className="container">
        <div className='ui-container ui-small'>
        <div className="mb-50">
            <h3>log in to Kapitify </h3>
        </div>
     <div className="m-10px form-group">
    <strong>Continue with social media</strong>
</div>

<div class="social-btn-container ">
    <a href="" className="social-btn social-google-btn w-50 form-group">
        <div className="icon-wrapper"><i className="icon ion-logo-google"><InstagramIcon /></i></div>
        <span className="btn-text">instagram</span>
    </a>
    <a href="" className="social-btn social-twitter-btn w-50 form-group">
        <div className="icon-wrapper"><i className="icon ion-logo-twitter"><TwitterIcon /></i></div>
        <span className="btn-text">twitter</span>
    </a>
    <a href="" className="social-btn social-facebook-btn w-50 form-group">
        <div className="icon-wrapper"><i className="icon ion-logo-facebook"><FacebookIcon /></i></div>
        <span className="btn-text">facebook</span>
    </a>
    
</div>  
              </div>
       
        </div>     
    )
}

export default Social
