import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS (if not already imported)

import App from './App';
import Toggle_List from './toggle_list';
import TodoApp from './todo-list-checkbox';

function Home() {
  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:">Navbar</a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/toggle_list">Toggle List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todo App</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/toggle_list" element={<Toggle_List />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
