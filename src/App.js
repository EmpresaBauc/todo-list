import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';



function App() {
  return (
    <Router>
        <Route exact path={"/"}>
          <Home/>
        </Route>

        <Route exact path={"/home"}>
          <Home/>
        </Route>

        <Route exact path={"/cadastro"}>
          <Cadastro/>
        </Route>

        <Route exact path={"/login"}>
          <Login/>
        </Route>
    </Router>
  )
}
export default App
