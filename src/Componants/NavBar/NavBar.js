import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar(props) {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MovieCargo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">Favourite List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;