import React from 'react'
//import ColoredLine from '../colorline/colorline'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import './social.scss';


export const Social = () => {
    return (
        <div className="social">
        <div className="separator">
    
    <div className="line"></div>
  <h2>or continue with </h2>
  <div className="line"></div>
        </div>
        <div className="social-links">
        <FcGoogle size="2em" />
        <FaFacebook size="2em" color="cornflowerblue" />
        <FaTwitter size="2em" color="blue" />
        </div>
        </div>
    
      
    )
}

export default Social;