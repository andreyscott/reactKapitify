import React from 'react';

import FormInput from '../../components/form-input/Form-input';
import CustomButton from '../../components/custom-buttons/Custom-button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import {auth, createUserProfileDocument } from '../../data/firebase.Utils';

import './sign-in.scss';
import './sign-up.css'
class SignUp extends React.Component {
    constructor() {
      super();
  
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { displayName, email, password, confirmPassword } = this.state;
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserProfileDocument(user, { displayName });
  
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    handleChange = event => {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
          <div className='content'>
              <div className='container'>
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

           


                 <div className='sign-up'>

                 <div class="">
                
                <div class=" text-center text-uppercase">
    <strong>Continue with social media</strong>
</div>

<div class="social-btn-container ">
    <a href="" className="social-btn social-google-btn w-50 form-group">
        <div className="icon-wrapper"><i className="icon ion-logo-google"></i></div>
        <span className="btn-text">google</span>
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

          <h2 className='title'>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
        </div>
        </div>

        
          </div>

                 </div>
                 </div>
              
      
      );
    }
  }
  
  export default SignUp;