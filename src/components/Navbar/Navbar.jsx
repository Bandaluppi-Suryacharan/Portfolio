import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import logo from "../../assets/sLogo.png";
import { Link, useLocation } from "react-router-dom";



function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/",  text: "Home" },
    { to: "/skillset",  text: "Skills" },
    { to: "/project",  text: "Projects" },
    { to: "/resume",  text: "Resume" },
    { to: "/contact", text: "Contact Me" },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <span className="brand-name">
                  SURYA <strong style={{ color: "#ffffff" }}>CHARAN</strong>
              </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => setExpand(false)}
                  className={location.pathname === item.to ? "active-link" : ""}
                >
                  <span style={{ marginRight: "5px" }}>{item.icon}</span>
                  {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
