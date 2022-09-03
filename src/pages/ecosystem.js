import * as React from "react"
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { graphql } from "gatsby";

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

const PortfolioPage = ({data}) => {
  return (
    <Stack gap={3}>
        <BGGrey>
            <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Slogan>{data.dataYaml.ecosystem.title}</Slogan>
            </SelfCentered>
            </div>
        </BGGrey>
        <SelfCentered>
            <Container style={{ width: '100%' }}>
                <img src={data.dataYaml.ecosystem.image} style={{ width: '100%' }}></img>
            </Container>
        </SelfCentered>
      </Stack>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
query {
    dataYaml {
        ecosystem {
          title
          image
        }
    }
}
`