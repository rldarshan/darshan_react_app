import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Toggle_List from './toggle_list';
import reportWebVitals from './reportWebVitals';
import TodoApp from './todo-list-checkbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Toggle_List /> */}
    <TodoApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
