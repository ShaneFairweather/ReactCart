import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ListGroup>
                <ListGroupItem><strong>Categories</strong></ListGroupItem>
                <ListGroupItem>Men's Clothing<span className="quantity">&nbsp; 164</span></ListGroupItem>
                <ListGroup>
                    <ListGroupItem>Jeans<span className="quantity">&nbsp; 16</span></ListGroupItem>
                    <ListGroupItem>Jackets and Suits<span className="quantity">&nbsp; 9</span></ListGroupItem>
                    <ListGroupItem>Shirts<span className="quantity">&nbsp; 11</span></ListGroupItem>
                    <ListGroupItem>Hoodies and Sweatshirts<span className="quantity">&nbsp; 14</span></ListGroupItem>
                <ListGroupItem><span className="currentCategory">T-shirts<span className="quantity">&nbsp; 8</span></span></ListGroupItem>
                    <ListGroupItem>Underwear<span className="quantity">&nbsp; 18</span></ListGroupItem>
                    <ListGroupItem>Outerwear<span className="quantity">&nbsp; 6</span></ListGroupItem>
                    <ListGroupItem>Shorts<span className="quantity">&nbsp; 21</span></ListGroupItem>
                    <ListGroupItem>Swimming<span className="quantity">&nbsp; 18</span></ListGroupItem>
                    <ListGroupItem>Thermals<span className="quantity">&nbsp; 13</span></ListGroupItem>
                    <ListGroupItem>Polos<span className="quantity">&nbsp; 30</span></ListGroupItem>
                </ListGroup>
                <ListGroupItem className="accessories">Men's Accessories<span className="quantity">&nbsp; 126</span></ListGroupItem>
                <ListGroupItem>Men's Shoes<span className="quantity">&nbsp; 471</span></ListGroupItem>
                <ListGroupItem>Luggage and Bags<span className="quantity">&nbsp; 98</span></ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Sidebar;