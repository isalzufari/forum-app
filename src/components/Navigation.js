import React from 'react';
import {
  Navbar, Nav, Container, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ authUser, signOut }) {
  const { name } = authUser;
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Forum App</Navbar.Brand>
        <Navbar.Toggle />
        {name && (
          <>
            <Nav className="me-auto">
              <Nav.Link to="/" as={Link}>Threads</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed:
                {' '}
                {name}
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

const authUserShape = {
  name: PropTypes.string,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
