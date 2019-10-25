import React from 'react'
import PropTypes from 'prop-types'
import { AboutUsPageTemplate } from '../../templates/AboutUsPage'

const AboutPagePreview = ({ entry, widgetFor }) => (
    <AboutUsPageTemplate
    title={entry.getIn(['data', 'title'])}
    />
)

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    })
}

export default AboutPagePreview