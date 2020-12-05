import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulBlogPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
      <Hero title={title} image={heroImage} height={'50vh'} />
      <Container>
        {/* {tags && <TagList tags={tags} basePath={basePath} />} */}
        <PostDetails
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} basePath={basePath} />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug

      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default BlogPostTemplate
