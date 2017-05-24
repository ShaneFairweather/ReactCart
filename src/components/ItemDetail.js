import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ItemDetail = () => {
    return (
        <div className="container">
            <Row>
                <Col sm={5}>
                    Item image
                </Col>
                <Col sm={5}>
                    Item info
                </Col>
            </Row>
        </div>
    )
}

export default ItemDetail;