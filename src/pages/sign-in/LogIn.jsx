import React from 'react';

import FormInput from '../../components/form-input/Form-input';

import CustomButton from '../../components/custom-buttons/Custom-button';

import FacebookIcon from '@material-ui/icons/Facebook';

import TwitterIcon from '@material-ui/icons/Twitter';

import InstagramIcon from '@material-ui/icons/Instagram';

import { auth, signInWithGoogle } from '../../data/firebase.Utils';

import './Sign-in.css';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className='container'>
        <div className=" align-items-center">
            <div className=" col-sm-6">

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
          <h2>Already have an account?</h2>
          <span>login in with email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className='buttons'>
              <CustomButton type='submit'> Login</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>

             </div>
        </div>
        
      );
    }
  }

export default SignIn;