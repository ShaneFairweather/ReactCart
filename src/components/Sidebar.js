import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ListGroup>
                <ListGroupItem><strong>Categories</strong></ListGroupItem>
                <ListGroupItem>Men's Jackets</ListGroupItem>
                <ListGroup>
                    <ListGroupItem>Leather Jackets</ListGroupItem>
                    <ListGroupItem>Peacoats</ListGroupItem>
                    <ListGroupItem>Sport Coats</ListGroupItem>
                    <ListGroupItem>Windbreakers</ListGroupItem>
                </ListGroup>
            </ListGroup>
        </div>
    )
}

export default Sidebar;