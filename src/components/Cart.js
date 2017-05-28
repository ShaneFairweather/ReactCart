import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/actions_index';
import { removeFromCart } from '../actions/actions_index';

import CartItem from './CartItem';

class Cart extends Component {
    renderCart(items) {
        return items.map(item =>
            <CartItem   item={item}
                        key={item.id}
                        removeFromCart={item => this.props.removeFromCart(item)}/>
        )
    }


    render() {
        let price = 0;

        if (this.props.cart.length == 0) {
            return (
                <div className="cart">
                    <Row>
                        <Col sm={9}>
                            <h3>Shopping Cart</h3>
                            <hr />
                            <Row>
                                <Col xs={12}>
                                    Your cart is empty
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={3}>
                            <div className="well">
                                <h5>Subtotal (0 items): $0.00</h5>
                                <Button className="checkoutButton" bsStyle="primary" bsSize="large" block>Proceed to
                                    Checkout</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        } else {
            return (
            <div className="cart">
                <Row>
                    <Col sm={9}>
                        <h3>Shopping Cart</h3>
                        <hr />
                        <Row>
                            <Col xs={12}>
                                {this.renderCart(this.props.cart)}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <div className="well">
                            <h5>Subtotal ({this.props.cart.length} item(s)): ${this.props.cart.reduce(function(previous, price) {
                                previous+=price.price;
                                return previous;
                            }, 0)}</h5>
                            <Button className="checkoutButton" bsStyle="primary" bsSize="large" block>Proceed to Checkout</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            );
        }
    };
};

// export default Cart;
function mapStateToProps(state) {
    return {
        cart: state.items.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeFromCart: removeFromCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
