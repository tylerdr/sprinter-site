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
  whatWeDoBody,
  howWeDoItBody,
  whyWeDoItBody,
  imageA,
  imageB,
  imageC
}) => (
  <main>
    {console.log("THIS IS GOING TO PREVIEW TEMP")}
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container header-text margin-left-40">
        <Content source={whatWeDo} />
      </div>
      <div className="container body-text margin-left-40">
        <Content source={whatWeDoBody}/>
      </div>
    </section>
    <section className="section">
      <div className="container full-width relative" style={{height: imageA.imageHeight}}>
      {imageA.imageLink && (
        <Image
        background
        resolutions="large"
        src={imageA.imageLink}
        alt={title}
        size="cover"/>
      )}
      </div>
    </section>
    <section className="section">
      <div className="container header-text margin-left-40">
        <Content source={howWeDo} />
      </div>
      <div className="flex-container container margin-left-40">
        <div className="flex-children min-width-300">
          <div className="body-text">
            <Content source={howWeDoItBody}/>
          </div>
        </div>
        <div className="flex-children min-width-300 relative rl-padding-1em">
        {imageB.imageLink && (
          <Image
          backgroundImageHeight={imageB.imageHeight}
          backgroundImageWidth={"100%"} //apply variable here
          background={false}
          className="full-width-image relative"
          resolutions="large"
          src={imageB.imageLink}
          alt={title}/>
        )}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container header-text margin-left-40">
        <Content source={whyWeDo} />
      </div>
      <div className="container body-text margin-left-40">
        <Content source={whyWeDoItBody}/>
      </div>
    </section>
    <section className="section">
      <div className="container full-width relative">
      {imageC.imageLink && (
        <Image
          background={false}
        className="full-width-image"
        resolutions="large"
        src={imageC.imageLink}
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
    {console.log("THIS IS GOING TO PREVIEW TEMP")}

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
        imageA {
          imageLink
          imageHeight
        }
        imageB {
          imageLink
          imageHeight
        }
        imageC {
          imageLink
          imageHeight
        }
      }
    }
  }
`
