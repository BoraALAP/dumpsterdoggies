import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { ButtonAni, ButtonIcon } from '../components/ui/Button'
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
        <ButtonAni to="/spenden ">Spenden</ButtonAni>
        {/* <h2>Other ways to sponsor a doggie:</h2>
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
          {/* <li>
            <a
              href="https://freewixpage.wixsite.com/dumpsterdoggies/futter"
              target="_blank"
              rel="nofollow"
            >
              Futter
            </a>
          </li> 
        </ul> */}
        {/* <h4>Hier könnt ihr FUTTER bestellen!</h4>
        <a
          href="https://www.patifood.com/inebolu-coplugu?fbclid=IwAR08gzmWJRjasYxLqj6dlRjkl_-7sxhnzvxvczGNMNKKYVr1vvyaq4FdGHE"
          target="_blank"
          rel="nofollow"
        >
          https://www.patifood.com/inebolu-coplugu?fbclid=IwAR08gzmWJRjasYxLqj6dlRjkl_-7sxhnzvxvczGNMNKKYVr1vvyaq4FdGHE
        </a>
        <p>
          Die 600 verlassenen Hunde in der Region sind auf die Futterverteilung
          von SEBAHAT und CIGDEM angewiesen. Ohne sie kommen sie nicht über die
          Runden, sie finden zu wenig Abfälle.
        </p>
        <p>
          Die Tierschützerinnen sind unendlich dankbar über jedes Tütchen
          Futter, über jede Dose Päppel- oder Welpenfutter.
        </p>
        <ul>
          <li>
            Es ist keine Lieferadresse notwendig. Das Futter wird automatisch an
            SEBAHAT verschickt!
          </li>

          <li>1 Türkische Lira = 0,17 Euro</li>

          <li>Bezahlen kann man mit Kreditkarte oder per Vorauskasse.</li>

          <li>
            Anmelden ist nicht notwendig, empfiehlt sich aber, wenn man immer
            mal wieder bestellen möchte.
          </li>

          <li>Guter Qualität und günstig ist der Hersteller TRENDLINE.</li>

          <li>
            Benötigt wird Trockenfutter, Dosenfutter zum Päppeln, Welpenfutter,
            Katzenfutter.
          </li>
        </ul>
        <p>
          Bei 600 heimatlosen Hunden ist Futter zu jeder Zeit lebensrettend!
        </p>
        <p>Wir danken euch herzlichst für eure Unterstützung!</p> */}
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
