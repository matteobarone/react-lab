import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Todo from './todo/todo';
import Chrono from './chrono/chrono';
import './App.css';

export const App = () => {
  ReactDOM.render(
    <div className="App">
      <Router basename="/react">
        <div>
          {Header()}
          {Content()}
        </div>
      </Router>
    </div>,
    document.getElementById('root')
  );
};

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
    <Route path="/redux-counter" render={() => (
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
      />
    )}/>
  </main>
);

const Home = () => (
  <div>
    <h1>REACT LAB</h1>
    <ol>
      <li><Link to="/todo"> Todos </Link></li>
      <li><Link to="/chronometer"> Chronometer </Link></li>
      <li><Link to="/redux-counter"> Redux counter </Link></li>
    </ol>
  </div>
);

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
  </div>
);

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(App);