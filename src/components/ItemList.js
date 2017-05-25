import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Shirt from '../assets/img/test.jpg';


const ItemList = () => {
    return (
        <div className="itemList">
            <Row>
                <Col sm={3}>
                    <Sidebar/>
                </Col>
                <Col sm={9}>
                    <Row>
                        <Col xs={12} className="sectionHeader">
                            <h3>Men's Jackets &nbsp; <span>31 Items</span></h3>
                            <hr />
                        </Col>
                        <Col xs={3}>
                            <div className="item">
                                <div className="temp"><img src={Shirt} alt="shirt" /></div>
                                <div className="priceTag">
                                    <p>$9.00</p>
                                    <p>Tiger<span className="itemType"> / Shirt</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="item">
                                <div className="temp"><img src={Shirt} alt="shirt" /></div>
                                <div className="priceTag">
                                    <p>$9.00</p>
                                    <p>Tiger<span className="itemType"> / Shirt</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="item">
                                <div className="temp"><img src={Shirt} alt="shirt" /></div>
                                <div className="priceTag">
                                    <p>$9.00</p>
                                    <p>Tiger<span className="itemType"> / Shirt</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="item">
                                <div className="temp"><img src={Shirt} alt="shirt" /></div>
                                <div className="priceTag">
                                    <p>$9.00</p>
                                    <p>Tiger<span className="itemType"> / Shirt</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="item">
                                <div className="temp"><img src={Shirt} alt="shirt" /></div>
                                <div className="priceTag">
                                    <p>$9.00</p>
                                    <p>Tiger<span className="itemType"> / Shirt</span></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ItemList;

