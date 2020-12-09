import React from 'react'
import styled from 'styled-components'

const Patreon = () => {
  return (
    <Container
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        fill="#F76754"
      />
      <path d="M10 24H13V10H10V24Z" fill="#002C49" />
      <path
        d="M19.0078 10C21.7605 10 24 12.2463 24 15.0075C24 17.7604 21.7605 20 19.0078 20C16.2465 20 14 17.7604 14 15.0075C14 12.2463 16.2465 10 19.0078 10Z"
        fill="white"
      />
    </Container>
  )
}

const Container = styled.svg`
  display: grid;
`

export default Patreon
