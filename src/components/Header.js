import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let cartConditional = () => {
        if(props.itemCount == 1) {
            return(
                <li><Link to='/cart'><i className="glyphicon glyphicon-shopping-cart"></i> &nbsp; <span>{props.itemCount} Item in Cart</span></Link></li>
            )
        } else {
            return(
                <li><Link to='/cart'><i className="glyphicon glyphicon-shopping-cart"></i> &nbsp; <span>{props.itemCount} Items in Cart</span></Link></li>
            )
        }
    }

    return (
        <Navbar collapseOnSelect className="mainNav">
            <Navbar.Header>
                <Navbar.Brand className="navbar-center navbar-brand">
                    <Link className="navbar-brand" to="/"><em>react</em><strong>Cart</strong></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Women</NavItem>
                    <NavItem eventKey={2} href="#"><span className="activeLink">Men</span></NavItem>
                    <NavItem eventKey={3} href="#">Kids</NavItem>
                </Nav>
                <Nav pullRight>
                    {cartConditional()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

