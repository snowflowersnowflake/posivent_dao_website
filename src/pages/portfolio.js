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
text-align: left;
`

const BlockText = styled.p`
font-size: 25px;
text-align: left;
`

const MarginAll = styled.div`
margin: 3rem;
`

const InvestTitle = styled.p`
font-size:18px;
font-weight:bold;
text-align: left;
`

const InvestText = styled.p`
font-size:18px;
text-align: left;
overflow-wrap: break-word;
`

const InvestImage = styled.img`
width: 143px;
height: 143px;
min-width: 143px;
object-fit: cover;
`

const Border = styled.a`
border-radius: 5px;
box-shadow: 0.00px 1.00px 4px 0px rgba(0,0,0,0.4);
display: block;
border-style: solid;
border-color: rgba(0,0,0,0.2);
border-width: 2px;
overflow: hidden;
height: 100%;
width: 143px;
height: 143px;
min-width: 143px;
margin: auto;
`

const PortfolioPage = ({data}) => {
  let investments = []
  data.dataYaml.portfolio.projects.forEach((e) => {
    investments.push(
        <Col>
          <MarginAll>
            <Container>
                <Row>
                    <Col>
                        <Border href={e.href} target="_blank"><InvestImage alt={e.title} src={e.image}></InvestImage></Border>
                    </Col>
                    <Col>
                        <InvestTitle>{e.title}</InvestTitle>
                        <InvestText>{e.block_text}</InvestText>
                    </Col>
                </Row>
            </Container>
          </MarginAll>
        </Col>
    )
  })
    let sprojects = []
    data.dataYaml.portfolio.second_projects.forEach((e) => {
        sprojects.push(
            <Col>
                    <Border href={e.href} target="_blank"><InvestImage alt={e.title} src={e.image}></InvestImage></Border>
                    <InvestText>{e.title}</InvestText>
            </Col>
        )
    })
  return (
    <Stack gap={3}>
        <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Slogan>{data.dataYaml.portfolio.title}</Slogan>
                <BlockText>{data.dataYaml.portfolio.block_text}</BlockText>
            </SelfCentered>
        </div>
        <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Container>
                    <Row xs={1} md={2}>
                        {investments}
                    </Row>
                </Container>
            </SelfCentered>
        </div>
        <BGGrey>
        <div className="col-md-5 mx-auto">
            <SelfCentered>
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <Slogan>
                                {data.dataYaml.portfolio.second_title}
                            </Slogan>
                        </Col>
                        <Col>
                            <BlockText style={{ margin: '1rem' }}>{data.dataYaml.portfolio.second_block_text}</BlockText>
                        </Col>
                    </Row>
                </Container>
            </SelfCentered>
        </div>
        </BGGrey>
        <div className="col-xs-1 col-md-5 mx-auto">
            <Container style={{ textAlignLast: 'center' }}>
                <Row className="justify-content-md-center">
                    {sprojects}
                </Row>
            </Container>
        </div>
    </Stack>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
query {
    dataYaml {
        portfolio {
          title
          block_text
          projects {
            image
            title
            block_text
            href
          }
          second_title
          second_block_text
          second_projects {
            image
            title
            href
          }
        }
    }
}
`