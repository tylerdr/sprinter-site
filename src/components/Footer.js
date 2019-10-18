import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'
import { SocialIcon } from 'react-social-icons';

export default () => (
  <div>
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <div className="socialBar">
          <SocialIcon url="https://instagram.com/sprinterconsulting/" />
          <SocialIcon url="https://www.linkedin.com/company/sprinterconsulting" />
          <SocialIcon url="https://twitter.com/Sprinter_HQ" />
          <SocialIcon url="https://facebook.com" />
        </div>
        <div className="copyright">
          © Copyright {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  </div>
)
