import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from './ui/Button'
import FormModal from './FormModal'
/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
  })
  const [displayModal, setDisplayModal] = useState(false)

  const handleInputChange = e => {
    console.log(state)

    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state }),
    })
      .then(handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  const handleSuccess = () => {
    setState({
      fName: '',
      lName: '',
      email: '',
      message: '',
    })
    setDisplayModal(true)
  }

  const closeModal = () => {
    setDisplayModal(false)
  }

  return (
    <Form
      name="contact"
      onSubmit={handleSubmit}
      data-netlify="true"
      overlay={displayModal}
      onClick={closeModal}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot" onChange={handleInputChange} />
        </label>
      </p>

      <Column>
        <TextField
          id="fname"
          name="fName"
          label="First Name"
          helperText="Required *"
          type="text"
          required
          onChange={handleInputChange}
          value={state.fName}
          variant="outlined"
        />
        <TextField
          id="lname"
          name="lName"
          label="Last Name"
          type="text"
          required
          helperText="Required *"
          onChange={handleInputChange}
          value={state.lName}
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
        onChange={handleInputChange}
        value={state.email}
        variant="outlined"
      />
      <TextField
        id="message"
        name="message"
        label="Your Message"
        type="text"
        onChange={handleInputChange}
        multiline
        rows={4}
        value={state.message}
        variant="outlined"
      />
      <Button type="submit">Send</Button>

      <FormModal visible={displayModal}>
        <p>
          Thank you for reaching out. I will get back to you as soon as
          possible.
        </p>
        <Button onClick={closeModal}>Okay</Button>
      </FormModal>
    </Form>
  )
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

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

export default ContactForm
