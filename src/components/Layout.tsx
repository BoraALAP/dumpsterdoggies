import React, { useEffect } from 'react'

import Footer from './global/Footer'
import GlobalStyle from '../styles/globalStyles.js'
import styled, { ThemeProvider } from 'styled-components'

import Header from './global/Header'
import SEO from './SEO'
import { primaryTheme } from '../styles/theme'
import ScrollTop from './ui/ScrollTop'

const Layout = ({ children }) => {
  // const { title, metaDescription, body } = data.contentfulPage
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <Header />

      <Main>{children}</Main>
      <ScrollTop showBelow={150} />
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  )
}

const Main = styled.main`
  display: grid;
`

export default Layout
