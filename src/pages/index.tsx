import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Posts from '../components/Pull/Posts'
import ButtonCards from '../components/ButtonCards'
import Instagram from '../components/Instagram'

const ButtonsData = [
  {
    title: 'Become Out Volunteer',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/volunteer/',
  },
  {
    title: 'Sponsor A Doggie',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    to: '/sponsor/',
  },
  {
    title: 'Prevent Suffering',
    p: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    href:
      'https://www.gofundme.com/f/4hhpx-dumpster-doggies-ending-cycle-of-suffering',
  },
]

const Index = ({ data }) => {
  console.log(data)
  const { title, description } = data.allSite.nodes[0].siteMetadata

  return (
    <Container>
      <SEO title="Home" description={description} />
      <PageHeader bg={data.header.childImageSharp.fluid.src}>
        <Title>
          <h3>Join Us</h3>
          <h1>We Need Your Help</h1>
        </Title>
      </PageHeader>

      <Detail>
        <h6>
          We are a small group of volunteers 100% powered by small donations
          from people like you, dedicated to improving lives of stray dogs in
          Turkey. 100% of the donations go to the dogs. We are also looking for
          digital volunteers and in person. These are our main focus areas:
        </h6>
        <List>
          <Li>
            <Number>
              <Inner>01.</Inner>
            </Number>
            <h6>We bring water and food to the dogs in their feeding areas.</h6>
          </Li>
          <Li>
            <Number>
              <Inner>02.</Inner>
            </Number>
            <h6>We capture, spay or neuter, and release them.</h6>
          </Li>
          <Li>
            <Number>
              <Inner>03.</Inner>
            </Number>
            <h6>We keep and heal the sick ones in our emergency shelter.</h6>
          </Li>
          <Li>
            <Number>
              <Inner>04.</Inner>
            </Number>
            <h6>We facilitate adoptions.</h6>
          </Li>
        </List>
        <ButtonCards data={ButtonsData} />
        <Wufaw>
          <h4>Our Partner</h4>
          <Bottom>
            <ImgS fluid={data.wufaw.childImageSharp.fluid} />
            <Text>
              <p>
                We are a global foundation focused on improving animal welfare
                locally and abroad through partnering with other organizations
                to support and mentor them.
              </p>

              <p>
                We work with foreign and local partners to help open vet
                clinics, provide free sterilization and vaccines, and many other
                initiatives that enhance the lives of animals.
              </p>
            </Text>
          </Bottom>
        </Wufaw>
      </Detail>
      <Instagram />
      {/* <Posts data={data.allContentfulBlogPost} /> */}
    </Container>
  )
}

const Wufaw = styled.div`
  display: grid;
  grid-gap: 2rem;
`
const ImgS = styled(Img)`
  display: grid;
  width: 200px;
  height: fit-content;
`

const Bottom = styled.div`
  display: grid;
  grid-gap: 2rem;
  text-align: center;
  justify-content: center;
  justify-items: center;
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    text-align: left;
    grid-auto-flow: column;
  }
`

const Text = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Container = styled.div``

const Detail = styled.div`
  display: grid;
  padding: 6rem ${({ theme }) => theme.paddingW};

  text-align: center;
  grid-gap: 6rem;
  h6 {
    max-width: ${({ theme }) => theme.maxWidth};
    justify-self: center;
  }
`

const List = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-gap: ${({ theme }) => theme.pageGap};
  grid-template-columns: 1fr 1fr;
  justify-self: center;
`
const Li = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-gap: 1rem;
  justify-items: center;
  max-width: 300px;
  text-align: center;
  h6 {
    color: ${({ theme }) => theme.color.primary};
  }
`

const Number = styled.div`
  display: grid;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.font.header};
  background-color: ${({ theme }) => theme.color.fourth};
  color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-content: center;
`

const Inner = styled.div`
  display: grid;
  margin-top: -7px;
  margin-right: -5px;
`

const PageHeader = styled.div`
  display: grid;
  height: 500px;
  background: url(${props => props.bg});
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${({ theme }) => theme.color.greyBg};
  background-blend-mode: luminosity;
  h1 {
    mix-blend-mode: difference;
    color: ${({ theme }) => theme.color.fourth};
  }
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
  }
`

const Title = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: ${({ theme }) => theme.paddingW};
  margin: 1rem 1rem;
  height: calc(100% - 2rem);
  background-color: ${({ theme }) => theme.color.fourth};
  box-sizing: border-box;
  width: 40%;
  max-width: 500px;
  grid-gap: 2rem;
  align-content: end;
  backdrop-filter: blur(20px);
  h1 {
    font-size: 4rem;
    font-weight: 800;
    width: 100vw;
    @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 3rem;
    font-weight: 600;
  }
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
    header: file(relativePath: { eq: "headerImage3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wufaw: file(relativePath: { eq: "wufaw.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBlogPost(limit: 3) {
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

export default Index
