import { React, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Link } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function signOutHandler(params) {
    setIsAuthenticated(false);
  }

  function signInHandler(params) {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ fontSize: "1em" }}
      >
        <Container>
          <Navbar.Brand style={{ fontSize: "1.7em" }}>HRMS</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' variant='pills'>
              <Nav.Item>
                {/* Hata veriyor */}
                <Link to="/addJobAdvertisement" className="nav-link" style={{ color: "white" }}>
                  İlan ver
                </Link>
              </Nav.Item>
            </Nav>

            {isAuthenticated ? (
              <SignedIn signOut={signOutHandler} />
            ) : (
              <SignedOut signIn={signInHandler} />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
}
