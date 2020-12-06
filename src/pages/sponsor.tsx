import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const Sponsor = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="Sponsor a Doggie" description={description} />
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
          description
          title
        }
      }
    }
  }
`
export default Sponsor
