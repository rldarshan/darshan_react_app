import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from './App';
import Toggle_List from './toggle_list';
import TodoApp from './todo-list-checkbox';

function Home() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">App</Link> | <Link to="/toggle_list">Toggle List</Link> | <Link to="/todo">Todo App</Link>
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
