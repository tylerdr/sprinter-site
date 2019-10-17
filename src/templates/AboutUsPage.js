import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
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
  gallery
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={whatWeDo} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={howWeDo} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <Content source={whyWeDo} />
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
        accordion {
          title
          description
        }
      }
    }
  }
`
