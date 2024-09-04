import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <>

            <Navbar expand="lg" className='mt-1 ms-5 mb-1'>
                <Link to='/'>
                    <img src='https://assets-eu-01.kc-usercontent.com/7cab15cb-2cb0-017c-906e-4b5275c3eb5c/10129fc7-a31d-46db-ba3e-f89a95fa1df1/baking-mad-logo-colour.png?w=640&q=80&lossless=true&auto=format' width='150px' height='65px' alt='' />
                </Link>

                <Container className='justify-content-center'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className='justify-content-evenly'>
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Link to='/OurStory' target="" className='me-5' style={{ textDecoration: 'none',color:'black' }}>
                                Our story
                            </Link>

                            <NavDropdown title="Recipes" id="basic-nav-dropdown" className='me-5' style={{ width: '100px',color:'black' }}>
                                <NavDropdown.Item ><span style={{ color: "tomato" }}>Bread & Dough</span></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    <span style={{ color: "tomato" }}>Cake Recipes</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href=""><span style={{ color: "tomato" }}>Deserts</span></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    <span style={{ color: "tomato" }}>Cookies & biscuits</span>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    <span style={{ color: "tomato" }}>Pancakes, Crepes & Waffles</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to='/TipsAndTicks' target="" className='me-5' style={{ textDecoration: 'none',color:'black' }}>
                                Tips & Tricks
                            </Link>
                            <NavDropdown title="Our Brands" id="basic-nav-dropdown" style={{ width: '100px',color:'black' }}>
                                <NavDropdown.Item href=""><span style={{ color: "tomato" }}>Allinson's</span></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    <span style={{ color: "tomato" }}>Nielsen-Massey</span>

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href=""><span style={{ color: "tomato" }}>Billington’s</span></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    <span style={{ color: "tomato" }}> Silver Spooon</span>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Link to='/ContactUs' target="" className='ms-5' style={{ textDecoration: 'none',color:'black' }}>
                                Contact us
                            </Link>
                        </Navbar.Collapse>

                    </Nav>
                </Container>
                <Link to='/search'>
                <Button className='bg-tomato me-5' style={{ width: '50px' }}><i className="fa fa-search" style={{ color: 'white' }}></i></Button>
                </Link>
                
            </Navbar>



        </>
    )
}

export default Header


