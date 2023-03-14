import React from 'react';
import {
  Navbar, Nav, Container, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userShape } from '../utils/propsValidate';

function Navigation({ authUser, signOut }) {
  const { name } = authUser;
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Forum App</Navbar.Brand>
        <Navbar.Toggle />
        {name && (
          <>
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>Threads</Nav.Link>
              <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed:
                <a href="#login">{name}</a>
              </Navbar.Text>
              <Button onClick={() => signOut()} className="ms-3" variant="primary" type="button">
                <i className="bi bi-box-arrow-right" />
              </Button>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
