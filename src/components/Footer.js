import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = ({foot}) => {
    return (
    <>
    <Navbar bg="light" expand="lg">
      <Container style={{justifyContent: 'center'}}>
            {foot}
      </Container>
    </Navbar>
    </>
    )
}

export default Footer