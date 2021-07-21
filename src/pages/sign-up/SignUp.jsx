 import React from 'react';
 import './sign-up.css';
 
 function SignUp() {
     return (
         <div className="content">
             <div className="container">
        <div className="row  align-items-center">
            <div className="col-sm-6">
                
                <div className="feature-list-wrapper">
                    <div className="content-header">
                        <h2 className="content-title">Join 26,000+ users!</h2>
                        <p className="register-page-font">
                            Kapitify is an ecommerce tool creatives & entrepreneurs used by students to sell their content, products & services across borders without any hassle
                        </p>
                    </div>
                    <ul className="list list-unstyled list-circle register-page-font">
                        <li>
                            <span>Easy 3 minutes online store setup</span>
                        </li>
                        <li>
                            <span>Six currencies to sell:  <b>(USD, GBP, NGN, GHS, KES & ZAR) </b> </span>
                        </li>
                        <li>
                            <span>Sell any kind of digital and physical product</span>
                        </li>
                        <li>
                            <span>Sell subscriptions and offer part payments with subscriptions</span>
                        </li>
                        <li>
                            <span>Sell tickets for events, trainings & webinars </span>
                        </li>
                        <li>
                            <span>Detailed dashboard analytics</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6">
                
                <div className="m-10px text-center text-uppercase form-group">
    <strong>Continue with social media</strong>
</div>
                    </div>
                 </div> 
            </div> 
         </div>
     )
 }
 
 export default SignUp;
 