import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
//import Accordion from '../components/Accordion'
//import Gallery from '../components/Gallery'
//import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const AboutUsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  whatWeDo,
  whyWeDo,
  howWeDo,
  gallery,
  image1,
  image2,
  image3,
  whatWeDoBody,
  howWeDoItBody,
  whyWeDoItBody
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container header-text">
        <Content source={whatWeDo} />
      </div>
      <div className="container body-text">
        <Content source={whatWeDoBody}/>
      </div>
    </section>
    <section className="section">
      <div className="container full-width relative">
      {image1 && (
        <Image
        className="full-width-image"
        resolutions="large"
        src={image1}
        alt={title}/>
      )}
      </div>
    </section>
    <section className="section">
      <div className="container header-text">
        <Content source={howWeDo} />
      </div>
      <div className="container body-text">
        <Content source={howWeDoItBody}/>
      </div>
    </section>
    <section className="section">
      <div className="container full-width relative">
      {image2 && (
        <Image
        backgroundImageHeight={'800px'}
        background={true}
        className="full-width-image"
        resolutions="large"
        src={image2}
        alt={title}/>
      )}
      </div>
    </section>
    <section className="section">
      <div className="container header-text">
        <Content source={whyWeDo} />
      </div>
      <div className="container body-text">
        <Content source={whyWeDoItBody}/>
      </div>
    </section>
    <section className="section">
      <div className="container full-width relative">
      {image3 && (
        <Image
          background={false}
        className="full-width-image"
        resolutions="large"
        src={image3}
        alt={title}/>
      )}
      </div>
    </section>

    {/* <section className="section">
      <div className="container">
        <h2>Our gallery component</h2>
        <Gallery images={gallery} />
      </div>
    </section> */}

    {/* <section className="section">
      <div className="container">
        <Popup>
          <Content source={section2} />
        </Popup>
      </div>
    </section> */}
  </main>
)

const AboutUsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutUsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutUsPage

export const pageQuery = graphql`
  query AboutUsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        template
        subtitle
        featuredImage
        whatWeDo
        whyWeDo
        howWeDo
        whatWeDoBody
        whyWeDoItBody
        howWeDoItBody
        image1
        image2
        image3
        accordion {
          title
          description
        }
      }
    }
  }
`
