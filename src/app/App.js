import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Todo from './todo/todo';
import Chrono from './chrono/chrono';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename="/react">
          <div>
            {Header()}
            {Content()}
          </div>
        </Router>
      </div>
    );
  }
}

const Header = () => (
  <header>
    <Link className="left" to="/"> HOME LAB </Link>
    <a className="right" href="/"> back to portfolio  </a>
    <div className="clear" />
  </header>
);

const Content = () => (
  <main>
    <Route exact={true} path="/" component={Home}/>
    <Route path="/todo" component={Todo}/>
    <Route path="/chronometer" component={Chrono}/>
  </main>
);

const Home = () => (
  <div>
    <h1>REACT LAB</h1>
    <ol>
      <li><Link to="/todo"> Todos </Link></li>
      <li><Link to="/chronometer"> Chronometer </Link></li>
    </ol>
  </div>
);