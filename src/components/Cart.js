import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Cart = () => {
    return (
        <div className="cart">
            <Row>
                <Col sm={9}>
                    <h3>Shopping Cart</h3>
                    <hr />
                    <Row>
                        <Col xs={12}>
                            Item 1
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}>
                    <div className="well">
                        <h5>Subtotal (1 item): $7.50</h5>
                        <Button className="checkoutButton" bsStyle="primary" bsSize="large" block>Proceed to Checkout</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Cart;