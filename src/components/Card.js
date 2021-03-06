import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.mq.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${({ theme }) => theme.color.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`

const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Date>{publishDate}</Date>
            <ReadingTime>
              {body.childMarkdownRemark.timeToRead} min read
            </ReadingTime>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
