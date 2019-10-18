import React from 'react'
import { Link } from 'gatsby'
import './AboutUsLink.css'
import Content from '../components/Content'

const AboutUsLink = ({
    title,
    content
}) => (

    <Link to='/about-us/' className="link" >
        <div className={`AboutLink`}>
            <span className="title">
            <Content source={title}/>
            </span>
            <span className="content">
            <Content source={content}/>
            </span>
        </div>
    </Link>
)

export default AboutUsLink 
