import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ItemPanel from './ItemPanel';
import ItemDetail from './ItemDetail';
import Shirt from '../assets/img/test.jpg';
import Items from '../reducers/items';

const ItemList = () => {
    const renderItems = (items) => {
        return items.map(item =>
            <ItemPanel item={item} key={item.id}/>
        )
    };

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
                        {renderItems(Items)}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ItemList;

