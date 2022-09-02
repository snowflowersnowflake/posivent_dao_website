import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";
import { graphql } from "gatsby";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Title = styled.div`
text-align: center;
font-size: 36px;
font-weight: 400;
margin-top: 4rem;
margin-bottom: 4rem;
`


const SelfCentered = styled.div`
align-self: center;
text-align: center;
`

const Name = styled.p`
font-size:15px;
font-weight:bold;
margin-bottom: 0rem;
text-align:center;
`
const Job = styled.p`
font-size:15px;
text-align:center;
margin-bottom: 0rem;
`

const Avatar = styled.img`
width: 101px;
height: 101px;
object-fit: cover;
border-radius: 50px; /* Opera 10.5, IE 9 */
text-align:center;
`

const EmptyPushed = styled.p`
margin-bottom: 4rem;
`

const SocialBtn = styled.a`
margin-left: 4px;
margin-right: 4px;
color: gray;
font-size: 1.5rem;
`

const TeamPage = ({data}) => {
  let team = []
  data.dataYaml.team.forEach(e => {
    let social = []
    if (e.social) {
        if (e.social.twitter) {
            social.push(<SocialBtn href={'https://twitter.com/' + e.social.twitter}><FaTwitter /></SocialBtn>)
        }
        if (e.social.github) {
            social.push(<SocialBtn href={'https://github.com/' + e.social.github}><FaGithub /></SocialBtn>)
        }
    }
    team.push(
        <Col>
          <SelfCentered>
            <Avatar src={e.image} alt={e.name}></Avatar>
          </SelfCentered>
          <Name>
            {e.name}
          </Name>
          <Job>
            {e.job}
          </Job>
          <SelfCentered>
            {social}
          </SelfCentered>
          <EmptyPushed></EmptyPushed>
        </Col>
    )
  });
  return (
    <Container>
        <Row>
            <Title>Meet Our Team</Title>
        </Row>
        <Row xs={2} md={4}>
            {team}
        </Row>
      </Container>
  )
}

export default TeamPage

export const pageQuery = graphql`
query {
    dataYaml {
        team {
            image
            name
            job
            social {
                twitter
                github
            }
        }
    }
}
`