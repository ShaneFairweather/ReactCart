import React from 'react';
import { Col, Button, Glyphicon } from 'react-bootstrap';

const ItemPanel = (props) => {

    return (
        <Col xs={3} className="itemPanel">
            <div className="item">
                <div className="itemContent">
                    <div className="temp"><img src={props.item.img} alt="shirt" /></div>
                    <div className="priceTag">
                        <p>${props.item.price}</p>
                        <p>{props.item.name}<span className="itemType"> / {props.item.type}</span></p>
                    </div>
                </div>
                <Button className="addToCartButton"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={() => props.addToCart(props.item)}
                        block><Glyphicon glyph="shopping-cart" />Add to Cart</Button>
            </div>
        </Col>
    );
};

export default ItemPanel;