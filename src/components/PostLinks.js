import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  a {
    background: ${({ theme }) => theme.color.primary};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${({ theme }) => theme.color.primary};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`${props.basePath}/blog/${props.previous.slug}/`}>
            &#8592; Prev
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`${props.basePath}/blog/${props.next.slug}/`}>
            Next &#8594;
          </NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
