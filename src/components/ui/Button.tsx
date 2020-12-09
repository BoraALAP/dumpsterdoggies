import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Button = props => {
  return props.href ? (
    <a href={props.href} target="_blank" rel="nofollow">
      <Container {...props}>{props.children}</Container>
    </a>
  ) : (
    <Container {...props}>{props.children}</Container>
  )
}

export const ButtonAni = ({ children, to }) => (
  <ContainerAni to={to}>{children}</ContainerAni>
)

export const ButtonIcon = props => {
  return props.href ? (
    <a href={props.href} target="_blank" rel="nofollow">
      <ContainerIcon {...props}>
        {props.icon} {props.children}
      </ContainerIcon>
    </a>
  ) : (
    <ContainerIcon {...props}>
      {props.icon} {props.children}
    </ContainerIcon>
  )
}

const Container = styled.button`
  display: grid;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.header};
  letter-spacing: ${({ theme }) => theme.borderRadius};
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px ${({ theme }) => theme.borderRadius} 6px
      ${({ theme }) => theme.color.primary80};
  }

  @media screen and (max-width: ${({ theme }) => theme.mq.small}) {
    box-shadow: 1px ${({ theme }) => theme.borderRadius} 10px
      ${({ theme }) => theme.color.primary40};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`
const ContainerIcon = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-items: center;
`

const ContainerAni = styled(Link)`
  display: grid;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.header};
  letter-spacing: ${({ theme }) => theme.borderRadius};
  transition: 0.55s ease;
  &:hover {
    box-shadow: 1px ${({ theme }) => theme.borderRadius} 6px
      ${({ theme }) => theme.color.primary80};
  }

  @media screen and (max-width: ${({ theme }) => theme.mq.small}) {
    box-shadow: 1px ${({ theme }) => theme.borderRadius} 10px
      ${({ theme }) => theme.color.primary40};
  }

  &:focus,
  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`

export default Button
