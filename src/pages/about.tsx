import React from 'react'
import styled from 'styled-components'
import ButtonCards from '../components/ButtonCards'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Volunteers from '../components/Volunteers'
import Letter from '../components/Letter'

const ButtonCardData = [
  {
    title: 'Become a Volunteer',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/volunteer/',
  },
  {
    title: 'Sponsor a Doggie',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/sponsor/',
  },
]

const About = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="About" description={description} />
      <Header>
        Dumpster Doggies is a non-profit charity that acts for stray dogs in
        northern Turkey.
      </Header>
      <Text>
        <p>
          We are volunteers who work hard to help the strays doggies on our
          spare time.
        </p>
        <p>
          We provide food, medication and shelter to stray dogs in the Kastamonu
          area.
        </p>
        <p>
          We will will use every bit of our energy and and every penny you give
          us to support the doggies.
        </p>
        <p>Take action and support us today!</p>
      </Text>
      <ButtonCards data={ButtonCardData} />
      <Volunteers
        sabahat={data.sabahat.childImageSharp.fluid}
        burak={data.burak.childImageSharp.fluid}
        cigdem={data.cigdem.childImageSharp.fluid}
        ender={data.ender.childImageSharp.fluid}
      />
      <Letter />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  padding: 6rem ${({ theme }) => theme.paddingW};
  justify-content: center;
  text-align: center;
  grid-gap: 6rem;
`

const Header = styled.h1`
  display: grid;
  justify-self: center;
`

const Text = styled.div`
  display: grid;
  grid-gap: 0.65rem;
  justify-content: center;
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
    sabahat: file(relativePath: { eq: "sabahat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    burak: file(relativePath: { eq: "burak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cigdem: file(relativePath: { eq: "cigdem.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ender: file(relativePath: { eq: "ender.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default About
