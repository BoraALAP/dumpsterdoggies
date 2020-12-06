import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const Adopt = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="Adopt" description={description} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
`

export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          menuLinks {
            slug
            name
          }
          description
          siteUrl
          title
        }
      }
    }
    markdownRemark {
      frontmatter {
        title
      }
    }
  }
`

export default Adopt
