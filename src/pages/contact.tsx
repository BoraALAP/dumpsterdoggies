import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <>
      <SEO title="Contact" description={description} />
      <Container>
        <Head>
          <h2>Drop us a Line</h2>
          <p>Thank you for contacting us. We will get back to you soon.</p>
        </Head>
        <ContactForm />
      </Container>
    </>
  )
}

const Head = styled.div`
  display: grid;
  gap: 2rem;
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

export default Contact
