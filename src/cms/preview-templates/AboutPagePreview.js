import React from 'react'
import PropTypes from 'prop-types'
import { AboutUsPageTemplate } from '../../templates/AboutUsPage'

const AboutPagePreview = ({ entry, widgetFor }) => (
            <AboutUsPageTemplate
            title={entry.getIn(['data', 'title'])}
            subtitle={entry.getIn(['data', 'subtitle'])}
            />
)

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
}

export default AboutPagePreview