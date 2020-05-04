import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Route exact path={"/"}>
          <Home/>
        </Route>

        <Route exact path={"/home"}>
          <Home/>
        </Route>
    </Router>
  )
}
export default App
