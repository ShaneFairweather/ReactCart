import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import ItemDetail from './components/ItemDetail'
import Cart from './components/Cart'
import Sidebar from './components/Sidebar'
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <SubHeader/>
          <div className="container mainContent">
              <BrowserRouter>
                  <div>
                      <Switch>
                          <Route path="/cart" component={Cart} />
                          <Route path="/itemdetail" component={ItemDetail} />
                          <Route path="/" component={ItemList} />
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
