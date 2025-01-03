import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

import '../styles/styles.scss';
import {App} from './App';
import StudentApp from './filter_student';
import Toggle_List from './toggle_list';
import TodoApp from './todo-list-checkbox';
import TodoApp2 from './todo-app';
import Counter from './redux_counter';
import MinesApp from './mines_app';

import { Provider } from 'react-redux';
import store from '../redux/store';

function Home() {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('app');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
          handleActive(document.location.pathname.split('/')[1])
        }

        document.title = "Test title"
    }, [navigate]);

    const handleActive = (header) => {
        setActiveNav(header);
    };

    const getNavClass = (header) => {
        return header === activeNav ? 'nav-link active' : 'nav-link';
    };

    function changeTheme(value){
        console.log(value)
    }

    return (
    <>
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
                        <Link className={getNavClass('app')} onClick={() => handleActive('app')} to="/">App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('redux_counter')} onClick={() => handleActive('redux_counter')} to="/redux_counter">Redux_Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('toggle_list')} onClick={() => handleActive('toggle_list')} to="/toggle_list">Toggle_List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('todo')} onClick={() => handleActive('todo')} to="/todo">Todo_Check</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('todo_app')} onClick={() => handleActive('todo_app')} to="/todo_app">Todo_App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('mines_app')} onClick={() => handleActive('mines_app')} to="/mines_app">Mines_App</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={getNavClass('student_app')} onClick={() => handleActive('student_app')} to="/student_app">Student_App</Link>
                    </li>
                </ul>
                <Form.Check
                    type="switch"
                    label="Dark theme"
                    onChange={(e) => changeTheme(e.target.checked)}
                />
                </div>
            </div>
        </nav>

    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redux_counter" element={<Counter />} />
        <Route path="/toggle_list" element={<Toggle_List />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo_app" element={<TodoApp2 />} />
        <Route path="/mines_app" element={<MinesApp />} />
        <Route path="/student_app" element={<StudentApp />} />
      </Routes>
    </Provider>
      </>
  );
}

export default Home;
