import React from 'react'
import styled from 'styled-components'
import ButtonCards from '../components/ButtonCards'

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

const About = () => {
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  padding: 6rem ${({ theme }) => theme.paddingW};
  justify-content: center;
  text-align: center;
  grid-gap: 4rem;
`

const Header = styled.h1`
  display: grid;
`

const Text = styled.div`
  display: grid;
  grid-gap: 0.65rem;
  justify-content: center;
`

export default About
