import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import App from './App';
import Toggle_List from './toggle_list';
import TodoApp from './todo-list-checkbox';
import TodoApp2 from './todo-app';

function Home() {
    const [appActive, setAppActive] = useState('nav-link active');
    const [todoActive, setTodoActive] = useState('nav-link');
    const [todoCheckActive, setTodoCheckActive] = useState('nav-link');
    const [toggleActive, setToggleActive] = useState('nav-link');

    function handleActive(header) {
        if (header == 'app') {
            setAppActive('nav-link active'); 
            setTodoActive('nav-link'); 
            setTodoCheckActive('nav-link');
            setToggleActive('nav-link');
        } else if(header == 'toggle') {
            setToggleActive('nav-link active'); 
            setTodoActive('nav-link'); 
            setAppActive('nav-link');
            setTodoCheckActive('nav-link');
        } else if(header == 'todo-app') {
            setTodoActive('nav-link active'); 
            setAppActive('nav-link'); 
            setToggleActive('nav-link');
            setTodoCheckActive('nav-link');
        } else if(header == 'todo-check') {
            setTodoCheckActive('nav-link active');
            setTodoActive('nav-link'); 
            setAppActive('nav-link'); 
            setToggleActive('nav-link');
        }
    }

    return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={(event) => {event.preventDefault();}}>Navbar</a>
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
                        <Link className={appActive} onClick={() => handleActive('app')} to="/">App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={toggleActive} onClick={() => handleActive('toggle')} to="/toggle_list">Toggle_List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={todoCheckActive} onClick={() => handleActive('todo-check')} to="/todo">Todo_Check</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={todoActive} onClick={() => handleActive('todo-app')} to="/todo_app">Todo_App</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/toggle_list" element={<Toggle_List />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo_app" element={<TodoApp2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
