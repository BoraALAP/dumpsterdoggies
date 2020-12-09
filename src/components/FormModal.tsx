import React from 'react'
import styled from 'styled-components'

const FormModal = ({ visible, children }) => {
  return <Modal visible={visible}>{children}</Modal>
}

const Modal = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  flex-flow: column;
  align-items: start;
  transition: 0.2s all;
  text-align: center;
  justify-items: center;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`
export default FormModal
