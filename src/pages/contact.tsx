import React from 'react'

import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <>
      <SEO title="Contact" description={description} />
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </>
  )
}

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

export default Contact
