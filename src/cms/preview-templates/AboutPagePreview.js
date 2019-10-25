import React from 'react'
import PropTypes from 'prop-types'
import { AboutUsPageTemplate } from '../../templates/AboutUsPage'

const AboutPagePreview = ({ entry, widgetFor }) => (
    <AboutUsPageTemplate
    title={entry.getIn(['data', 'title'])}
    featuredImage={getAsset(entry.getIn(['data', 'featuredImage']))}
    />
)

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
}

export default AboutPagePreview