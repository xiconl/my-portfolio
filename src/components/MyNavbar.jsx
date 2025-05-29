import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const MyNavbar = () => {
    return (
        <div>
            {/* Navbar */}
            <section>
                <Navbar className="bg-dark fixed-top">
                    <Navbar.Brand className="text-light ms-5">ALOYSIUS CHIKWENDU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav me-3" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto me-5">
                            <Nav.Link href="#Hero" className="nav-link text-light">Home</Nav.Link>
                            <Nav.Link href="#Skill" className="nav-link text-light">Skills</Nav.Link>
                            <Nav.Link href="#About" className="nav-link text-light">About</Nav.Link>
                            <Nav.Link href="#Work" className="nav-link text-light">Work</Nav.Link>
                            <Nav.Link href="#Contact" className="nav-link text-light">Contact</Nav.Link>
                            <NavDropdown>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </section>
        </div>
    )
}

export default MyNavbar