import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby";

const BreakLine = styled.div`
white-space: pre;
`

const Container = styled.div`
max-width: 480px;
width: 100%;
`

const Flex = styled.div`
display: flex;
justify-content: center;
`

const Title = styled.p`
font-size: 45px;
font-weight: 400;
`
const Text = styled.p`
font-szie: 18px;
`

const CareersPage = ({data}) => {
  return (
    <Flex>
        <Container>
            <Title>{data.dataYaml.careers.title}</Title>
            <Text><BreakLine>{data.dataYaml.careers.text}</BreakLine></Text>
        </Container>
    </Flex>
  )
}

export default CareersPage

export const pageQuery = graphql`
query {
    dataYaml {
        careers {
            text
            title
        }
    }
}
`