import * as React from "react"
import Stack from 'react-bootstrap/Stack';
import styled from "styled-components";
import { graphql } from "gatsby";

const Centered = styled.div`
justify-content: center;
`

const SelfCentered = styled.div`
align-self: center
`

const Contact = styled.p`
font-size: 50px;
font-weight: 400;
`

const ContactWrapper = styled.div`
margin: 2rem;
`

const ContactFont = styled.p`
font-size: 24px;
`

const ContantHref = styled.a`
margin: 0;
padding: 0;
border: 0;
outline: 0;
vertical-align: baseline;
background: transparent;
cursor: pointer;
font-size: 20px;
text-decoration: none;
color: inherit;
`

const ContectPage = ({data}) => {
  let contacts = [];
  data.dataYaml.contact.forEach(({ name, link, text }) => {
    contacts.push(
        <ContactWrapper>
          <ContactFont>{name}</ContactFont>
          <p>
          <ContantHref href={link}>{text}</ContantHref>
          </p>
        </ContactWrapper>
      )
  })
  return (
    <Centered>
      <Stack gap={3} className="col-md-5 mx-auto">
        <SelfCentered>
          <Contact>Contact Us</Contact>
        </SelfCentered>
        <hr></hr>
        <SelfCentered>
          {contacts}
        </SelfCentered>
      </Stack>
    </Centered>
  )
}

export default ContectPage

export const pageQuery = graphql`
query {
    dataYaml {
        contact {
          link
          name
          text
        }
    }
}
`