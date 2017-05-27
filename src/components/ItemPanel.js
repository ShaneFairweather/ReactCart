import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ItemPanel = ({item}) => {
    return (
        <Col xs={3}>
            <div className="item">
                <div className="temp"><Link to="/itemdetail"><img src={item.img} alt="shirt" /></Link></div>
                <div className="priceTag">
                    <p>${item.price}</p>
                    <p>{item.name}<span className="itemType"> / {item.type}</span></p>
                </div>
                <Button className="addToCartButton" bsStyle="primary" bsSize="small" block>Add to Cart</Button>
            </div>
        </Col>
    );
};

export default ItemPanel;