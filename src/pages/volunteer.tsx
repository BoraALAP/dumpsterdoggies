import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Button from '../components/ui/Button'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const volunteer = ({ data }) => {
  const { title, description } = data.allSite.nodes[0].siteMetadata
  const [formElements, setFormElements] = useState({
    fName: '',
    lName: '',
    email: '',
    location: '',
    contact: '',
    help: '',
  })
  const [modal, setModal] = useState({ visible: false, openModal: false })

  const handleChange = e => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value })
  }

  const closeModal = () => {
    setModal({ ...modal, visible: false })
  }

  const handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', formElements }),
    })
      .then({
        fName: '',
        lName: '',
        email: '',
        location: '',
        contact: '',
        help: '',
      })
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <Container>
      <SEO title="Volunteer" description={description} />
      <Form
        name="volunteer"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        overlay={modal.openModal}
        onClick={closeModal}
      >
        <Column>
          <TextField
            id="fname"
            name="fName"
            label="First Name"
            helperText="Required *"
            type="text"
            onChange={handleChange}
            value={formElements.fName}
            variant="outlined"
          />
          <TextField
            id="lname"
            name="lName"
            label="Last Name"
            type="text"
            helperText="Required *"
            onChange={handleChange}
            value={formElements.lName}
            variant="outlined"
          />
        </Column>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          helperText="Required *"
          onChange={handleChange}
          value={formElements.email}
          variant="outlined"
        />
        <Column>
          <TextField
            id="location"
            name="location"
            label="Location"
            type="text"
            onChange={handleChange}
            value={formElements.location}
            variant="outlined"
          />
          <TextField
            id="contact"
            name="contact"
            label="Best Way to Contact You"
            type="text"
            onChange={handleChange}
            helperText="If it's email leave it empty"
            value={formElements.contact}
            variant="outlined"
          />
        </Column>
        <TextField
          id="help"
          name="help"
          label="How Can You Help"
          type="text"
          onChange={handleChange}
          multiline
          rows={4}
          value={formElements.help}
          variant="outlined"
        />

        <Button type="submit">Send</Button>
        <Modal visible={modal.openModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={closeModal}>Okay</Button>
        </Modal>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  gap: 4rem;
  padding: ${({ theme }) => theme.paddingW};
  justify-items: center;
`

const Form = styled.form`
  display: grid;
  gap: 2rem;
  max-width: 650px;
  width: 100%;
`

const Column = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

const Modal = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.white};
  padding: 2rem;
  border-radius: 2px;
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

export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          description
          title
        }
      }
    }
  }
`
export default volunteer
