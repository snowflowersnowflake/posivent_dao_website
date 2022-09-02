import * as React from "react"
import styled from "styled-components";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const SelfCentered = styled.div`
align-self: center;
text-align: center;
`
const Slogan = styled.p`
font-size: 50px;
margin-top: 2rem;
font-weight: 400;
`


const CareersPage = ({data}) => {
    let careers = []
    data.dataYaml.careers.forEach(({ title, pdf }) => {
        careers.push(
            <Col xs>
                <Card style={{ margin: '4px', maxWidth: '200px' }}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Button as="a" type="button" value="Application" href={pdf}>Application</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (
        <Stack gap={3}>
            <SelfCentered>
                <Slogan>Careers</Slogan>
            </SelfCentered>
            <Flex>
                <Container>
                    <Row>
                        {careers}
                    </Row>
                </Container>
            </Flex>
        </Stack>
  )
}

export default CareersPage

export const pageQuery = graphql`
query {
    dataYaml {
        careers {
            pdf
            title
        }
    }
}
`