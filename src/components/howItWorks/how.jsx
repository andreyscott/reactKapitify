import React from 'react';
import './how.css'

function How() {
    return (
        <div className="container">
        <div className="row">
         <div className="col-md-8 mx-auto"> 
            <div className="section-header text-center">
                    <h3 className="section-title">
                          How it works  
                      </h3>
                      <p className="lead">
                      It takes just 3 steps and less than 5 mins to unlock the best way to sell online. If it takes longer, feel free to close your account with us forever.
                      </p>
             </div>
      
          </div>

         </div> 

         {/* explanation   */}

         <div className="row">
                <div className="col-md-4 col-12">
                    <div className="feature-card">
                        <div className="u-icon u-icon__circle u-icon__lg bg-dimped__red">
                            <strong>1</strong>
                        </div>
                        <div className="feature-card__body">
                            <p>
                                Create a free account and login to Selar.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="feature-card">
                        <div className="u-icon u-icon__circle u-icon__lg bg-dimped__orange">
                            <strong>2</strong>
                        </div>
                        <div className="feature-card__body">
                            <p>
                                Add your bank account details and upload your product(s).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="feature-card">
                        <div className="u-icon u-icon__circle u-icon__lg bg-dimped__green">
                            <strong>3</strong>
                        </div>
                        <div className="feature-card__body">
                            <p>
                                Share the link to your store or product and start receiving payments instantly!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
     </div>
        
    )
}

export default How;
