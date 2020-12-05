import React from 'react'
import styled from 'styled-components'

const Logo = () => (
  <Container>
    Dumpster <br />
    Doggies
  </Container>
)

const Container = styled.h1`
  display: grid;
  font-weight: 800;
  font-size: 2rem;
  align-content: end;
  line-height: 1;
`

export default Logo
