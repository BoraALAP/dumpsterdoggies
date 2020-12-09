import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  padding: ${({ theme }) => theme.paddingW};
  gap: ${({ theme }) => theme.pageGap};
  justify-items: center;
  text-align: center;
`

export default Container
