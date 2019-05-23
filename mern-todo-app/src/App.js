import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import DeleteTodos from "./components/delete-todo.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="header" style={styles.center}>
            <h1>
              <img src={logo} width="50" height="50" alt="CodingTheSmartWay.com" />
              MERN-Stack Todo App
            </h1>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodos} />
        </div>
      </Router>
    );
  }
}

var styles = {
  navBar: {
    backgroundColor: 'dark blue'
  },
  center: {
    textAlign: 'center',
    color: 'red'
  },
  rightNav: {
  },
  verticalLine: {
  },
};

export default App;