import * as React from "react"
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const BlockText = styled.p`
font-size: 25px;
`

const IntroTitle = styled.div`
font-size:36px;
`

const IntroText = styled.div`
font-size:18px;
width: 511px;
overflow-wrap: break-word;
text-align: left;
`

const MarginAll = styled.div`
margin: 2rem;
`

// const InvestTitle = styled.p`
// font-size:26px;
// font-weight:bold;
// text-align: left;
// `

// const InvestText = styled.p`
// font-size:18px;
// text-align: left;
// overflow-wrap: break-word;
// `

const AboutPage = ({data}) => {
  let intro = []
  data.dataYaml.about.intro.forEach((e) => {
    intro.push(
        <Row style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Col><IntroTitle style={{ paddingRight: '48px' }}>{e.title}</IntroTitle></Col>
            <Col><IntroText>{e.block_text}</IntroText></Col>
        </Row>
    )
  })
  let invest = []
  data.dataYaml.about.invest.forEach((e) => {
    invest.push(
        <Col>
          <MarginAll>
            <InvestTitle>{e.title}</InvestTitle>
            <InvestText>{e.block_text}</InvestText>
          </MarginAll>
        </Col>
    )
  })
  return (
    <Stack gap={3}>
        <BGGrey>
            <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Slogan>{data.dataYaml.about.title}</Slogan>
                <BlockText>{data.dataYaml.about.block_text}</BlockText>
            </SelfCentered>
            </div>
        </BGGrey>
        <SelfCentered>
            <Container>
                {intro}
            </Container>
        </SelfCentered>
        <BGGrey>
            <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Slogan>Where we invest</Slogan>
                <Container>
                    <Row xs={1} md={2}>
                        {invest}
                    </Row>
                </Container>
            </SelfCentered>
            </div>
        </BGGrey>
      </Stack>
  )
}

export default AboutPage

export const pageQuery = graphql`
query {
    dataYaml {
        about {
          block_text
          intro {
            block_text
            title
          }
          invest {
            block_text
            title
          }
          title
        }
    }
}
`
