import Form from '../components/Form';
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/home"><img src={logo} className="App-logo" alt="logo" /></Link>
        <h1>
          Login
        </h1>
        <br/>
        <p>E-mail</p>
        <input type="text"/>
        <br/>
        <p>Senha</p>
        <input type="password"/>
      </header>
    </div>
  );
}

export default App;
