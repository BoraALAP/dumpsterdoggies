import React, { useEffect } from 'react'

import Footer from './global/Footer'
import GlobalStyle from '../styles/globalStyles.js'
import styled, { ThemeProvider } from 'styled-components'

import Header from './global/Header.tsx'
import { primaryTheme } from '../styles/theme'

const Layout = ({ children }) => {
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

      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  )
}

const Main = styled.main`
  display: grid;
`

export default Layout
