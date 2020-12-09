import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { ButtonIcon } from '../components/ui/Button'
import Patreon from '../assets/icons/Patreon'
import Container from '../components/Container'
import Paypal from '../assets/icons/Paypal'

const Sponsor = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="Sponsor a Doggie" description={description} />
      <Enterence>
        <h2>Sponsor A Doggie</h2>

        <p>
          We are grateful for any help we can get for the doggies. Your
          contribution matters.
        </p>

        <p>
          Please check out our Patreon for monthly support. We love Patreon as
          it allows us to plan for our expenses. We are funded, or as we like to
          say powered by your donations, so having monthly support coming via
          Patreon helps lower are financial stress levels by a lot! Thank you so
          much for that! Every bit counts.
        </p>
        <Buttons>
          <ButtonIcon href="https://www.patreon.com/dumpsterdoggies">
            <Patreon /> Support Us on Patreon
          </ButtonIcon>
          <ButtonIcon href="paypal.me/DumpsterDoggies ">
            <Paypal /> Support Us on Paypal
          </ButtonIcon>
        </Buttons>
      </Enterence>
      <Donation>
        <h2>Other ways to sponsor a doggie:</h2>
        <ul>
          <li>
            <a
              href="https://freewixpage.wixsite.com/dumpsterdoggies/spenden"
              target="_blank"
              rel="nofollow"
            >
              Spenden
            </a>
          </li>
          <li>
            <a
              href="https://freewixpage.wixsite.com/dumpsterdoggies/in-german"
              target="_blank"
              rel="nofollow"
            >
              In German
            </a>
          </li>
          <li>
            <a
              href="https://freewixpage.wixsite.com/dumpsterdoggies/futter"
              target="_blank"
              rel="nofollow"
            >
              Futter
            </a>
          </li>
        </ul>
      </Donation>
    </Container>
  )
}

const Enterence = styled.div`
  display: grid;
  gap: 2rem;
`

const Buttons = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
`

const Donation = styled.div`
  display: grid;
  justify-items: center;

  text-align: left;
  ul {
    padding: 2rem;
  }
  li {
    list-style: square;
  }
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
