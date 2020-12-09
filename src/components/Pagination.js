import React from 'react'
import { navigate, Link } from 'gatsby'
import styled from 'styled-components'
import SelectIcon from '../icons/SelectIcon'

const Pagination = props => {
  function changePage(e) {
    navigate(
      e.target.value
        ? `${props.context.paginationPath}/${e.target.value}`
        : `${props.context.paginationPath}/`
    )
  }

  return (
    <>
      {props.context.numberOfPages > 1 && (
        <Wrapper>
          <Numbers>
            {props.context.humanPageNumber}{' '}
            <Select
              value={
                props.context.humanPageNumber === 1
                  ? ``
                  : props.context.humanPageNumber
              }
              onChange={changePage}
            >
              {Array.from({ length: props.context.numberOfPages }, (_, i) => (
                <option value={`${i === 0 ? `` : i + 1}`} key={`page${i + 1}`}>
                  {i + 1}
                </option>
              ))}
            </Select>
            / {props.context.numberOfPages} <SelectIcon />
          </Numbers>
          <div>
            {props.context.previousPagePath && (
              <Button to={`${props.context.previousPagePath}`}>
                <span>&larr;</span> Prev
              </Button>
            )}
            {props.context.nextPagePath && (
              <Button style={{ order: 3 }} to={`${props.context.nextPagePath}`}>
                Next <span>&rarr;</span>
              </Button>
            )}
          </div>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin: -1.5rem auto 2.5rem;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

const Button = styled(Link)`
  background: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 0 0 0.5rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s all;
  &:hover {
    background: ${({ theme }) => theme.color.highlight};
  }
  @media (hover: none) {
    background: ${({ theme }) => theme.color.primary} !important;
  }
`

const Numbers = styled.div`
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-block;
  float: left;
  color: ${({ theme }) => theme.color.text};
  padding: 1rem;
  background: white;
  position: relative;
  transition: 0.3s all;
  svg {
    fill: ${({ theme }) => theme.color.text};
    margin: 0 0 0 0.25rem;
    transition: 0.3s all;
  }
  &:hover {
    background: ${({ theme }) => theme.color.tertiary};
  }
  @media (hover: none) {
    background: white !important;
  }
`

const Select = styled.select`
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: transparent;
  option {
    color: black;
  }
`

export default Pagination
