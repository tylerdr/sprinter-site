import React from 'react'
import { Link } from 'gatsby'
import './AboutUsLink.css'

const AboutUsLink = ({
    title,
    content
}) => (
    <Link to='/about-us/' className="link" >
        <div className={`AboutLink ${title}`}>
            {title}
        </div>
    </Link>
)

export default AboutUsLink 
