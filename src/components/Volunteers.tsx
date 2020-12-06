import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Volunteers = ({ sabahat, cigdem, burak, ender }) => {
  const details = [
    {
      img: sabahat,
      name: 'Sabahat',
      city: 'Kastamonu',
      body:
        'Sabahat is an accountant, born in 1979. She lives with her mom, dad and brother. She is a government approved, registered rescuer for 8 years.',
    },
    {
      img: cigdem,
      name: 'Cigdem',
      city: 'Inobolu',
      body:
        'Cigdem is a geography teacher in high school, born in 1980. She lives single with her 3 cats, and has ba rescuer for 4 years.',
    },
    {
      img: burak,
      name: 'Burak',
      city: 'Kastamonu',
      body:
        'Burak is Sebahat’s cousin but she calls her ``brother``. He is born in 2000, and is a student in College of Physical education and Sports and also studying Veterinary Technical School. He lives single and has been a rescuer for 3 years.',
    },
    {
      img: ender,
      name: 'Ender',
      city: 'Toronto - Izmir',
      body:
        'Ender is an oral surgeon, born in 1962. She lives part time in Toronto, Canada and Izmir, Turkey. She has been helping rescuers and volunteers all over Turkey for 7 years.',
    },
  ]
  return (
    <Container>
      <h3>Our Crew</h3>
      <Content>
        {details.map((item, index) => (
          <Card key={index}>
            <Img fluid={item.img} />
            <TitleContainer>
              <Title>{item.name}</Title>
              <City>{item.city}</City>
            </TitleContainer>
            <Body>{item.body}</Body>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

const Body = styled.p`
  display: grid;
`

const City = styled.h6`
  display: grid;
`

const Title = styled.h5`
  display: grid;
`

const TitleContainer = styled.div`
  display: grid;
  gap: 0rem;
`

const Card = styled.div`
  display: grid;
  gap: 1rem;
  align-items: start;
  align-content: start;
`

const Content = styled.div`
  display: grid;
  gap: 1rem;
  @media screen and (min-width: ${({ theme }) => theme.mq.xsmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.mq.mid}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Container = styled.div`
  display: grid;
  gap: 3rem;
`

export default Volunteers
