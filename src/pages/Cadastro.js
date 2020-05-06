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
        <p>
          Cadastro
        </p>
      </header>
    </div>
  );
}

export default App;
