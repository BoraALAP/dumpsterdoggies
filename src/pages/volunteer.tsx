import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Button from '../components/ui/Button'
import TextField from '@material-ui/core/TextField'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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

  const handleChange = e => {
    setFormElements({ ...formElements, [e.target.name]: e.target.value })
  }
  console.log(formElements)
  return (
    <Container>
      <SEO title="Volunteer" description={description} />
      <Form name="volunteer" method="POST" data-netlify="true">
        <Column>
          <TextField
            id="outlined-helperText"
            name="fName"
            label="First Name"
            helperText="Required *"
            defaultValue=""
            onChange={handleChange}
            value={formElements.fName}
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            name="lName"
            label="Last Name"
            helperText="Required *"
            defaultValue=""
            onChange={handleChange}
            value={formElements.lName}
            variant="outlined"
          />
        </Column>
        <TextField
          id="outlined-helperText"
          name="email"
          label="Email"
          helperText="Required *"
          onChange={handleChange}
          value={formElements.email}
          defaultValue=""
          variant="outlined"
        />
        <Column>
          <TextField
            id="outlined-helperText"
            name="location"
            label="Location"
            onChange={handleChange}
            value={formElements.location}
            defaultValue=""
            variant="outlined"
          />
          <TextField
            id="outlined-helperText"
            name="contact"
            label="Best Way to Contact You"
            onChange={handleChange}
            helperText="If it's email leave it empty"
            value={formElements.contact}
            defaultValue=""
            variant="outlined"
          />
        </Column>
        <TextField
          id="outlined-helperText"
          name="help"
          label="How Can You Help"
          onChange={handleChange}
          multiline
          rows={4}
          value={formElements.help}
          defaultValue=""
          variant="outlined"
        />

        <Button type="submit">Send</Button>
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
