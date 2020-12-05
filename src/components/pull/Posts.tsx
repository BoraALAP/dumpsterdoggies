import React from 'react'
import styled from 'styled-components'
import PostDetails from '../PostDetails'
import PostsListing from './PostsListing'

const Posts = ({ data: { nodes } }) => {
  return (
    <Container>
      <Title>Latest Posts</Title>
      <Content>
        {nodes.map((node, index) => {
          return <PostsListing node={node} index={index} />
        })}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  margin: 1rem 1rem 3rem;
  grid-gap: 1rem;
`

const Title = styled.h4`
  display: grid;
`

const Content = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Posts
