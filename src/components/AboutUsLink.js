import React from 'react'
import { Link } from 'gatsby'
import './AboutUsLink.css'

const AboutUsLink = ({
    title,
    content
}) => (
    <Link to='/about-us/' className={`AboutLink ${title}`}>
    <div className="linkBody">
        <div className="linkTitle">
            {title}
        </div>
        <div className="linkContent">
            {content}
        </div>
    </div>
    </Link>
)

export default AboutUsLink 
