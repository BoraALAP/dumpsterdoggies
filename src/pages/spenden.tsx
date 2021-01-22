import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Button, { ButtonIcon } from '../components/ui/Button'
import Paypal from '../assets/icons/Paypal'
import Patreon from '../assets/icons/Patreon'
import Letter from '../components/Letter'

const Spenden = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  return (
    <Container>
      <SEO title="Spenden" description={description} />
      <Cards>
        <Card>
          <h5>Paypal</h5>
          <p>
            Ebenso PAYPAL und dabei Gebührenabzug für Dumpster Doggies sparen:
            Einfach per GELD SENDEN an{' '}
            <a
              href="mailto:eselcuktrident@icloud.com"
              target="_blank"
              rel="nofollow"
            >
              eselcuktrident@icloud.com
            </a>
          </p>
          <ButtonIcon href="https://www.paypal.com/paypalme/dumpsterdoggies">
            <Paypal />
            Paypal
          </ButtonIcon>
        </Card>

        <Card className="switch">
          <h5>Patrion</h5>
          <h6>​SCHUTZPATRON WERDEN:</h6>
          <p>
            Schon ab 2 USD monatlich könnt ihr zuverlässige und gut planbare
            Hilfe leisten, gerettete Streuner zu versorgen und weitere Streuner
            in Not in der Rettungsstation aufzunehmen.
          </p>

          <ButtonIcon href="https://www.patreon.com/dumpsterdoggies">
            <Patreon />
            Patreon
          </ButtonIcon>
        </Card>
        <CardS>
          <h5>Überweisung</h5>
          <p>
            <h6>Mit Spendenbescheinigung per Überweisung an:</h6>
            Die Tierstimme e.V. <br />
            *** Bitte unbedingt „DUMPSTER DOGGIES“ angeben!***
            <br />
            <strong>IBAN DE41 8505 0300 0221 0725 51</strong>
            <br />
            <strong>BIC OSDDDE81XXX</strong>
            <br />
            Info Spendenbescheinigung „Die Tierstimme” e.V.:
          </p>
          <Button href="www.dietierstimme.de/spenden/geldspenden">
            Weiterlesen
          </Button>
        </CardS>
      </Cards>

      <Letter>
        <p>
          In der nordtürkischen Region um Kastamonu werden Hunde wie Dreck
          behandelt. Hunde in dieser Gegend leisten jeden Tag einen
          Überlebenskampf. Die Gegend ist arm und die meisten Bewohner ohne
          Bildung und Beruf. Die Menschen verjagen die Hunde, setzen sie aus im
          Nirgendwo, fahren sie einfach in Müllfahrzeugen aus der Stadt. Manche
          werden dabei von der Müllpresse getötet.
        </p>
        <p>
          Überlebende werden in abgelegenen Regionen ausgesetzt, wo sie dann
          aber kein Futter finden. SEBAHAT, Cigdem und ihr kleines Team tun
          alles in ihrer Macht stehende, Streunern und Katzen in Not zu helfen.
        </p>
        <p>
          Doch sie können nur mit unserer Unterstützung helfen, denn es gibt
          keinerlei staatliche Hilfe - nicht mal für die dringend notwendigen
          Kastrationen, die ja gerade im Interesse der Kommunen stehen sollten.
        </p>
        <p>
          Umso erfreulicher ist es, dass von Spendengeldern eine kleine
          Rettungsstation aufgebaut werden konnte! Dort werden kranke und
          verletzte Hunde gesund gepflegt und Welpen ohne Mutter oder Schutz
          gepäppelt. Auch leben dort Dauerinsassen, die da draußen nicht mehr
          für sich selbst sorgen können, weil sie zu schwach, alt oder
          körperlich behindert sind.
        </p>
        <p>
          Bitte unterstützt die Arbeit von SEBAHAT, damit Futter, Tierarzt,
          Impfstoffe, Antiparasitenmittel, Kastrationen und Hundehütten
          finanziert werden können.
        </p>
        <p>
          Nur mit Eurer Hilfe, kann dieses Projekt leben! Nur durch dieses
          Projekt gibt es weniger Leid und Schmerz für Hunde in Not und ohne ein
          Zuhause!
        </p>
      </Letter>
    </Container>
  )
}

const Card = styled.div`
  display: grid;
  gap: 1rem;
  background: ${({ theme }) => theme.color.white};
  padding: 1rem;
  align-content: start;
  justify-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const CardS = styled(Card)`
  box-shadow: 3px 3px 8px ${({ theme }) => theme.color.tertiaryBg20};
  strong {
    font-weight: 600;
  }

  order: 3;
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    grid-column: span 2;
  }
  @media screen and (min-width: ${({ theme }) => theme.mq.mid}) {
    order: 2;
    grid-column: initial;
  }
`

const Cards = styled.div`
  display: grid;
  gap: 2rem;

  .switch {
    order: 2;
  }
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.mq.mid}) {
    grid-auto-flow: column;
    grid-template-columns: 1fr 1.5fr 1fr;
    .switch {
      order: 3;
    }
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

export default Spenden
