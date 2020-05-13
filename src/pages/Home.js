import Form from '../components/Form';
import Button from '../components/Button';
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Container className="App-header">   
          <Row>
            <img src={logo} className="App-logo" alt="logo" />
          </Row>
          <Row>
            <Col>
              <Button/>
            </Col>
            <Col>
              <Button/>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
