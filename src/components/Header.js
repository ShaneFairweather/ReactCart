import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect className="mainNav">
            <Navbar.Header>
                <Navbar.Brand className="navbar-center navbar-brand">
                    <a className="navbar-brand" href="#"><em>react</em><strong>Cart</strong></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Women</NavItem>
                    <NavItem  ventKey={2} href="#"><span className="activeLi">Men</span></NavItem>
                    <NavItem eventKey={2} href="#">Kids</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={3} href="#"><i className="glyphicon glyphicon-shopping-cart"></i> &nbsp; <span>1 Item in Cart</span></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

