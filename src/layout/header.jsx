import React, { useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavLogo from "../../src/assets/images/mmtLogo.png";

const Header = () => {
  const ref = useRef(null);
  return (
    <>
      <header id="header" className="header-section sticky" ref={ref}>
        <div className="top-menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{ padding: "0px" }}>
                <Navbar
                  collapseOnSelect
                  expand="lg"
                  bg="dark"
                  variant="dark"
                  className="col-md-12 mb-2"
                  style={{ padding: "2px 20px" }}
                >
                  <Navbar.Brand>
                    <Nav.Link href="/">
                      <img
                        src={NavLogo}
                        alt="Logo"
                        className="nav-brand-logo"
                      />
                    </Nav.Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse>
                    <Nav
                      className={`col-md-12 mb-1`}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <Nav.Link href="/" className=" nav-link">
                        Flights
                      </Nav.Link>
                      <Nav.Link href="/hotels" className=" nav-link">
                        stays
                      </Nav.Link>
                      <Nav.Link href="/trains" className=" nav-link">
                        Trains
                      </Nav.Link>
                      {/* <Nav.Link href="/contact-us" className=" nav-link">
                        Contact Us
                      </Nav.Link> */}
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
