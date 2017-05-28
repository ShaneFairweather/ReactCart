import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


const CartItem = (props) => {
    return (
        <div className="cartItem">
            <Row>
                <Col xs={2}>
                    <img className="cartItemImage" src={props.item.img} alt={props.item.name}/>
                </Col>
                <Col xs={2}>
                    <p>{props.item.name}</p>
                    <p>{props.item.type}</p>
                </Col>
                <Col xs={2} className="pull-right">
                    <Button className="cartDeleteButton"
                            bsStyle="default"
                            bsSize="xsmall"
                            onClick={() => props.removeFromCart(props.item)}
                    >Remove</Button>
                </Col>
                <Col xs={2} className="pull-right">
                    <p>{props.item.price}</p>
                </Col>

            </Row>
        </div>
    )
}

export default CartItem;