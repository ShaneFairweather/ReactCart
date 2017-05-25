import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import Checkout from './components/Checkout'
import Sidebar from './components/Sidebar'
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <SubHeader/>
          <div className="container mainContent">
              <BrowserRouter>
                  <div>
                      <Route path="/items" component={ItemList} />
                      <Route path="/checkout" component={Checkout} />
                  </div>
              </BrowserRouter>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
