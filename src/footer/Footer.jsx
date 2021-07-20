import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <section className="footer">
      <div className="link-row">
        <div className="address-column">
          <h3>Kapitify</h3>
          <p>somewhere in uniben <br/>Benin city, Edo state 90014</p>
        </div>
        <div className="link-column">
          <ul>
            <li><span>Explore</span></li>
            <li><a href="www.andrewirorere.tech">Websites</a></li>
            <li><a href="/email">Examples</a></li>
            <li><a href="/status">Pricing</a></li>
            <li><a href="/security">Security</a></li>
          </ul>
          <ul>
            <li><span>Resources</span></li>
            <li>
              <a href="/knowledge-base" rel="noopener noreferrer">Knowledge Base</a>
            </li>
            <li>
              <a href="/api-documentation" rel="noopener noreferrer">API Documentation</a>
            </li>
            <li>
              <a href="/developers" rel="noopener noreferrer">Developers</a>
            </li>
          </ul>
          <ul>
            <li><span>Company</span></li>
            <li>
              <a href="/our-story" rel="noopener noreferrer">Our Story</a>
            </li>
            <li><a href="/events" rel="noopener noreferrer">Events</a></li>
            <li><a href="/careers" rel="noopener noreferrer">Careers</a></li>
          </ul>
        </div>
      </div>
      <div class="social-row">
        <div class="copyright-column">
          <p>&copy; 2021 andreyscott, Inc. All rights reserved.</p>
        </div>
        <div class="social-column">
          <a href="https://www.instagram.com/andrayscott/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="your-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a
            href="https://web.facebook.com/andrey.king.188"
            target="_blank"
            rel="noopener noreferrer"
            >Facebook</a>
          <a href="your-youtube" target="_blank" rel="noopener noreferrer"
            >YouTube</a>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Footer;
