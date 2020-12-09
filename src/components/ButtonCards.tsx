import React from 'react'
import styled from 'styled-components'

import { ArrowRight } from 'react-feather'
import { Link } from 'gatsby'

const ButtonCards = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => {
        if (item.hasOwnProperty('to')) {
          return (
            <Link to={item.to} key={index}>
              <Box>
                <Left>
                  <h3>{item.title}</h3>
                  <p>{item.p}</p>
                </Left>
                <ArrowRight />
              </Box>
            </Link>
          )
        } else {
          return (
            <a href={item.href} rel="noopenner" key={index}>
              <Box>
                <Left>
                  <h4>{item.title}</h4>
                  <p>{item.p}</p>
                </Left>
                <ArrowRight />
              </Box>
            </a>
          )
        }
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 2rem;
`

const Box = styled.div`
  display: grid;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  text-align: left;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: -1rem 1rem 0 ${({ theme }) => theme.color.fourth};
  transition: all 0.5s ease;
  grid-template-columns: auto auto;
  align-items: end;
  svg {
    transform: scale(1);
    transition: all 0.5s ease;
  }

  &:hover {
    box-shadow: 0.5rem -0.5rem 0 ${({ theme }) => theme.color.primary80};
    svg {
      transform: scale(1.5);
    }
  }
`

const Left = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export default ButtonCards
