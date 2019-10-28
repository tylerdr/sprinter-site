import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ComponentsPageTemplate } from '../templates/ComponentsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import { AboutUsPageTemplate } from '../templates/AboutUsPage'
import { AboutPagePreview } from './preview-templates/AboutPagePreview'

// if (
//   window.location.hostname === 'localhost' &&
//   window.localStorage.getItem('netlifySiteURL')
// ) {
//   CMS.registerPreviewStyle(
//     window.localStorage.getItem('netlifySiteURL') + '/styles.css'
//   )
// } else {
//   CMS.registerPreviewStyle('/styles.css')
// }

CMS.registerPreviewStyle('../components/globalStyles.css')

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('components-page', ({ entry }) => (
  <ComponentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))



var AboutPreview = createClass({
  render: function() {
    entry = this.props.entry;
    var imageA = entry.getIn(['data', 'imageA']);
    var bg = this.props.getAsset(imageA);
    return h('div', {},
    h('h1', {}, entry.getIn(['data', 'title'])),
    h('img', {src: bg.toString()}),
    h('div', {"className": "whatWeDo"}, this.props.widgetFor('whatWeDoBody'))
    )
  }
});


CMS.registerPreviewTemplate("about-us-page", AboutPreview)

//CMS.registerPreviewTemplate('about-us-page', AboutPagePreview)
