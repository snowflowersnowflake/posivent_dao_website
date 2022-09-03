import * as React from "react"
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { graphql } from "gatsby";

// define basic stylistic features
const BGGrey = styled.div`
background-color: rgb(232,232,232)
`

const SelfCentered = styled.div`
align-self: center;
text-align: center;
`
const Slogan = styled.p`
font-size: 50px;
margin-top: 2rem;
font-weight: 400;
`

const AboutPage = ({data}) => {
  return (
    <Stack gap={3}>
        <BGGrey>
            <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Slogan>{data.dataYaml.about.title}</Slogan>
            </SelfCentered>
            </div>
        </BGGrey>
        <SelfCentered>
            <Container>
                {data.dataYaml.about.text}
            </Container>
        </SelfCentered>
      </Stack>
  )
}

export default AboutPage

export const pageQuery = graphql`
query {
    dataYaml {
        about {
          title
          text
        }
    }
}
`