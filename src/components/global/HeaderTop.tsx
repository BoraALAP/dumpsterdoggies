import React from 'react'
import styled from 'styled-components'

const HeaderTop = ({ footer }) => (
  <Container footer={footer}>
    <Left footer={footer}>
      <a
        href="https://www.patreon.com/dumpsterdoggies"
        target="_blank"
        rel="noopener"
      >
        Patreon
      </a>
      <a
        href="https://www.youtube.com/channel/UCULAkdwbtCKa3FOPxbxQ71w/videos"
        target="_blank"
        rel="noopener"
      >
        Youtube
      </a>
      <a
        href="https://www.instagram.com/sbht_lovesdogs_/"
        target="_blank"
        rel="noopener"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/dumpsterdoggies/"
        target="_blank"
        rel="noopener"
      >
        Facebook
      </a>
    </Left>
    <Right footer={footer}>
      <a href="" target="_blank" rel="noopener">
        Donate
      </a>
    </Right>
  </Container>
)

const Container = styled.div`
  display: ${props => (props.footer ? 'grid' : 'none')};
  grid-auto-flow: column;
  padding: 16px 5vw;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.secBg20};
  justify-content: ${props => (props.footer ? 'end' : 'space-between')};
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
  }
`

const Left = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 24px;

  justify-content: ${props => (props.footer ? 'end' : 'start')};
`

const Right = styled.div`
  display: grid;
  display: ${props => (props.footer ? 'none' : 'grid')};
`

export default HeaderTop
