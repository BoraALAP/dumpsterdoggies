import React from 'react'
import styled from 'styled-components'
import Feed from 'react-instagram-authless-feed'

const Instagram = () => {
  return (
    <Container>
      <FeedS userName="dumpster_doggies" limit="9" />
    </Container>
  )
}

const FeedS = styled(Feed)`
  display: grid;
  gap: 1rem;
  padding: ${({ theme }) => theme.paddingW};
  @media screen and (min-width: ${({ theme }) => theme.mq.xsmall}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Container = styled.div`
  display: grid;
`

export default Instagram
