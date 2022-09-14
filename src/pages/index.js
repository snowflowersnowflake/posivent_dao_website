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
const Slogan = styled.p`
font-size: 25px;
font-weight: 400;
`

const IndexPage = ({data}) => {
  return (
    <Centered>
      <Stack gap={3} className="col-md-5 mx-auto">
        <SelfCentered>
          <p></p>
          <img src={data.dataYaml.index.full_logo}  alt="Logo"></img>
          <p></p>
          <Slogan>{data.dataYaml.index.slogan}</Slogan>
        </SelfCentered>
        <hr></hr>
      </Stack>
    </Centered>
  )
}

export default IndexPage

export const pageQuery = graphql`
query {
  dataYaml {
    index {
      full_logo
      slogan
    }
  }
}
`
