import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RefSample from './ref-sample';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/Sam">User Sam</Link>
            </li>
            <li>
              <Link to="/user/Peter">User Peter</Link>
            </li>
            <li>
              <Link to="/refSample">Ref Sample</Link>
            </li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/user/:username" exact component={User} />
          <Route path="/refSample" exact component={RefSample} />
        </div>
      </Router>
    )
  }
}

export default App;

const Home = () => {
  return (<h1>Welcome to Home page</h1>)
}

const About = () => {
  return (<h1>Welcome to About page</h1>)
}

const User = ({match}) => {
  return (<h1>Welcome to user {match.params.username}</h1>)
}
