import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = ({ authUser, signOut }) => {
  const { name, email, avatar } = authUser;
  console.log(name);
  return (
    <Navbar bg='dark' variant='dark' className='mb-3'>
      <Container>
        <Navbar.Brand href="#home">Forum App</Navbar.Brand>
        <Navbar.Toggle />
        {authUser &&
          <>
            <Nav className="me-auto">
              <Nav.Link href="#home">Threads</Nav.Link>
              <Nav.Link href="#features">Leaderboards</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{name}</a>
                <Button onClick={() => signOut()} className='ms-3' variant="primary" type="button">
                  Sign Out
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </>
        }
      </Container>
    </Navbar>
  )
}

export default Navigation