import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Button = ({ children }) => <Container>{children}</Container>

const ButtonAni = ({ children, to }) => (
  <ContainerAni to={to}>{children}</ContainerAni>
)

const Container = styled.button`
  display: grid;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.header};
  letter-spacing: 2px;
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px 2px 6px ${({ theme }) => theme.color.primary80};
  }

  @media screen and (max-width: ${({ theme }) => theme.mq.small}) {
    box-shadow: 1px 2px 10px ${({ theme }) => theme.color.primary40};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`

const ContainerAni = styled(Link)`
  display: grid;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.header};
  letter-spacing: 2px;
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px 2px 6px ${({ theme }) => theme.color.primary80};
  }

  @media screen and (max-width: ${({ theme }) => theme.mq.small}) {
    box-shadow: 1px 2px 10px ${({ theme }) => theme.color.primary40};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`

export default Button
