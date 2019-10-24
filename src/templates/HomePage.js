import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import AboutUsLink from '../components/AboutUsLink'
import Image from '../components/Image'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title,
   subtitle,
   featuredImage,
   missionStatement,
   visionStatement,
   video,
   videoPoster,
   videoTitle,
   aboutLinks,
   image1
   }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container home-text">
        <Content source={missionStatement} />
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
      <div className="container home-text">
        <Content source={visionStatement} />
      </div>
    </section>
    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
    <section className="section">
      <div className="container links">
      {aboutLinks.map((link, index) => (
        <AboutUsLink title={link.title} content={link.content} key={link.title+index}/>
      ))}
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        missionStatement
        visionStatement
        richText
        video
        videoPoster
        videoTitle
        image1
        aboutLinks {
          title
          content
        }
        accordion {
          title
          description
        }
      }
    }
  }
`
