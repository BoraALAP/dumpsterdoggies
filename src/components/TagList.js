import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${({ theme }) => theme.color.tertiary};
    padding: 0.5em;
    border-radius: ${({ theme }) => theme.borderRadius};
    text-transform: capitalize;
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.secondary};
    &:hover {
      background: ${({ theme }) => theme.color.secondary};
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`${props.basePath}/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
