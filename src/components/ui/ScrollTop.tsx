import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

const ScrollTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <Container show={show}>
      {show && (
        <IconButton
          onClick={handleClick}
          className="buttonClass"
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all 0.5s ease;
  z-index: 99;
  .buttonClass {
    border-radius: 50%;
    padding: 1rem;
    background: ${({ theme }) => theme.color.tertiaryBg20};
  }
`

export default ScrollTop
