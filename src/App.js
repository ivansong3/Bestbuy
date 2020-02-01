import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RemindersList from './components/reminders-list.component';
import EditReminder from './components/edit-reminder.component';
import CreateReminder from './components/create-reminder.component';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noopener noreferrer">
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
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
          <Route path="/" exact component={RemindersList} />
          <Route path="/edit/:id" component={EditReminder} />
          <Route path="/create" component={CreateReminder} />
        </div>
      </Router>
    );
  }
}

export default App;