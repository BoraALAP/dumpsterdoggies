import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: 600px;
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${({ theme }) => theme.color.body};
    &:hover {
      color: ${({ theme }) => theme.color.body};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${({ theme }) => theme.color.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${({ theme }) => theme.color.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.color.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
