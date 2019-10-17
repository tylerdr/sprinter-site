import React from 'react'
import { Link } from 'gatsby'
import './AboutUsLink.css'
import Content from '../components/Content'

const AboutUsLink = ({
    title,
    content
}) => (
    <Link to='/about-us/' className="link" >
        <div className={`AboutLink ${title}`}>
            <Content source={title}/>
        </div>
    </Link>
)

export default AboutUsLink 
