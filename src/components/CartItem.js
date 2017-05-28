import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CartItem = (props) => {
    return (
        <div className="cartItem">
            <Row>
                <Col xs={2}>
                    <img className="cartItemImage" src={props.item.img} alt={props.item.name}/>
                </Col>
                <Col xs={2}>
                    <p>{props.item.name}</p>
                </Col>
                <Col xs={2} pullRight>
                    <p>{props.item.price}</p>
                </Col>
            </Row>
        </div>
    )
}

export default CartItem;