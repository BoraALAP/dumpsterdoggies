import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  padding: ${({ theme }) => `calc(2*${theme.paddingH}) ${theme.paddingW}`};
  gap: ${({ theme }) => theme.pageGap};
  justify-items: center;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.mq.mid}) {
    padding: ${({ theme }) => theme.paddingW};
  }
`

export default Container
