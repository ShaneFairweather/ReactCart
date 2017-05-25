import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';

class SubHeader extends Component {
    render() {
        return (
            <Navbar className="subHeader">
                <Nav>
                    <NavItem eventKey={1} href="#">Novelty</NavItem>
                    <NavItem eventKey={2} href="#">Lifestyle</NavItem>
                    <NavItem eventKey={3} href="#">Clothing</NavItem>
                    <NavItem eventKey={4} href="#">Footwear</NavItem>
                    <NavItem eventKey={5} href="#">Accessories</NavItem>
                    <NavItem eventKey={6} href="#">Brands</NavItem>
                    <NavItem eventKey={7} href="#">Premium</NavItem>
                    <NavItem eventKey={7} href="#">Sport</NavItem>
                    <NavItem eventKey={7} href="#"><span className="action">Sale</span></NavItem>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit" className="searchButton"><Glyphicon glyph="search" /></Button>
                    </Navbar.Form>
                </Nav>
            </Navbar>
        )
    }
}


export default SubHeader;