import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import PostsListing from '../components/Pull/PostsListing'

const Blog = ({ data }) => {
  const { nodes } = data.allContentfulBlogPost
  console.log(nodes)

  return (
    <Container nodeLength={nodes.length}>
      {nodes.map((node, index) => (
        <PostsListing node={node} index={index} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 4rem 2rem;
  grid-gap: 1rem;

  a:first-child {
    grid-column: span 3;
  }
`

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        publishDate(formatString: "MMMM DD, YYYY")
        body {
          childMarkdownRemark {
            timeToRead
          }
        }
        description {
          description
        }
        title
        heroImage {
          fluid {
            src
          }
        }
        slug
      }
    }
  }
`

export default Blog
