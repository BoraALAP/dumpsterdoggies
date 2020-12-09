import React from 'react'
import styled from 'styled-components'

const Letter = ({ title, children }) => {
  return (
    <Container>
      {title && <h3>{title}</h3>}
      <Context>{children}</Context>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  text-align: center;
`

const Context = styled.div`
  display: grid;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.tertiaryBg20};
  padding: 2rem;
  text-align: left;
  gap: 1rem;
  width: max-content;
  justify-self: center;
  p,
  h5,
  h6 {
    text-align: start;
    max-width: ${({ theme }) => theme.maxWidth};
  }
`

export default Letter
