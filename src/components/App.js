import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import SubHeader from './SubHeader'
import Footer from './Footer'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'
import Cart from './Cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { addToCart } from '../actions/actions_index';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header itemCount={this.props.cart.length}/>
                  <SubHeader/>
                  <div className="container mainContent">
                      <Switch>
                          <Route path="/cart" component={Cart} />
                          <Route path="/itemdetail" component={ItemDetail} />
                          <Route path="/" component={ItemList} />
                      </Switch>
                  </div>
                  <Footer/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        cart: state.items.data
    };
}

export default connect(mapStateToProps, { addToCart })(App);

