import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemList from './components/ItemList'
import Sidebar from './components/Sidebar'
import { Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="container mainContent">
              <Row>
                  <Col sm={3}>
                      <Sidebar/>
                  </Col>
                  <Col sm={9}>
                      <ItemList/>
                  </Col>
              </Row>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
