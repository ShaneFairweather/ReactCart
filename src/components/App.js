import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../App.css'
import Header from './Header'
import SubHeader from './SubHeader'
import Footer from './Footer'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'
import Cart from './Cart'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { addToCart } from '../actions/actions_index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let arr = [];

class App extends Component {
  render() {
      arr.push(this.props.cart)
      let arrLength = arr.length || 0
      // console.log("Cart:" + arr)
      // console.log(arrLength)
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header itemCount={this.props.cart.items.length}/>
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

// export default App;
function mapStateToProps(state) {
    return {
        cart: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addToCart: addToCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
