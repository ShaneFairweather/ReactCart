import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ItemPanel from './ItemPanel';
import ItemDetail from './ItemDetail';
import Shirt from '../assets/img/shirt1.jpg';
import Items from '../reducers/items';
import { addToCart } from '../actions/actions_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ItemList extends Component {
    renderItems(items) {
        return items.map(item =>
            <ItemPanel item={item}
                       key={item.id}
                       addToCart={item => this.props.addToCart(item)}
            />
        )
    }

    render() {
        return (
            <div className="itemList">
                <Row>
                    <Col sm={3}>
                        <Sidebar/>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            <Col xs={12} className="sectionHeader">
                                <h3>Mens' T-Shirts &nbsp; <span>8 Items</span></h3>
                                <hr />
                            </Col>
                            {this.renderItems(Items)}
                            &nbsp;
                            <hr />
                            &nbsp;
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
};


// export default connect(null, { addToCart })(ItemList);

function mapStateToProps(state) {
    return {
        cart: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart: addToCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
