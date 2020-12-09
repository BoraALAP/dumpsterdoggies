import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Container from '../components/Container'

import SEO from '../components/SEO'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${({ theme }) => theme.color.primary};
  }
`

const NotFoundPage = () => (
  <>
    <SEO title="404" description="Page Not Found" />
    <Container>
      <h2>Page Not Found</h2>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </>
)

export default NotFoundPage
