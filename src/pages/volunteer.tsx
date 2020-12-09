import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Button from '../components/ui/Button'
import TextField from '@material-ui/core/TextField'

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
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  const handleChange = e => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value })
  }

  const handleSuccess = () => {
    setFormElements({
      fName: '',
      lName: '',
      email: '',
      location: '',
      contact: '',
      help: '',
    })
    setModal(true)
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'volunteer', ...formElements }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  return (
    <Container>
      <SEO title="Volunteer" description={description} />
      <Enterence>
        <h2>Volunteer</h2>
        <h6>
          Thank you for your interest in volunteering. Right now, we are looking
          for:
        </h6>
        <ul>
          <li>Online help to help with our online accounts</li>
          <li>Flight volunteers</li>

          <li>In person help in shelter</li>
          <li>Any other way your unique talents could help us</li>
        </ul>
      </Enterence>

      <Form
        name="volunteer"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        overlay={modal}
        onClick={closeModal}
      >
        <h4>
          If you would like to volunteer feel free to fill the form below.
        </h4>
        <Column>
          <TextField
            id="fname"
            name="fName"
            label="First Name"
            helperText="Required *"
            type="text"
            required
            onChange={handleChange}
            value={formElements.fName}
            variant="outlined"
          />
          <TextField
            id="lname"
            name="lName"
            label="Last Name"
            type="text"
            required
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
          required
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
        <Modal visible={modal}>
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
  gap: ${({ theme }) => theme.pageGap};
  padding: ${({ theme }) => theme.paddingW};
  text-align: center;
  justify-items: center;
`

const Form = styled.form`
  display: grid;
  gap: 2rem;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Column = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.mq.small}) {
    grid-auto-flow: column;
    gap: 1rem;
  }
`

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

const Enterence = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;

  gap: 1rem;
  justify-items: center;

  ul {
    padding: 2rem;
  }
  li {
    text-align: left;
    list-style: square;
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
