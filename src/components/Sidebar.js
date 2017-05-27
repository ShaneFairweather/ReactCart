import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ListGroup>
                <ListGroupItem><strong>Categories</strong></ListGroupItem>
                <ListGroupItem>Men's Clothing</ListGroupItem>
                <ListGroup>
                    <ListGroupItem>Jeans</ListGroupItem>
                    <ListGroupItem><span className="currentCategory">Jackets and Suits</span></ListGroupItem>
                    <ListGroupItem>Shirts</ListGroupItem>
                    <ListGroupItem>Hoodies and Sweatshirts</ListGroupItem>
                    <ListGroupItem>T-shirts and Polos</ListGroupItem>
                    <ListGroupItem>Underwear</ListGroupItem>
                    <ListGroupItem>Outerwear</ListGroupItem>
                    <ListGroupItem>Shorts</ListGroupItem>
                    <ListGroupItem>Swimming</ListGroupItem>
                    <ListGroupItem>Thermals</ListGroupItem>
                </ListGroup>
            </ListGroup>
        </div>
    )
}

export default Sidebar;