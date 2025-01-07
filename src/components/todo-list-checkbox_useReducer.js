import { useReducer, useState } from "react";
import "../styles/index.scss";
import Button from "react-bootstrap/Button";

export default function TodoCheckList() {
  const initialState = 0;
  const [count_value, dispatch] = useReducer(reducer, initialState);

  const [items, setItems] = useState([
    { text: "Learn JavaScript", done: false },
    { text: "Learn React", done: false },
    { text: "Play around in JSFiddle", done: true },
    { text: "Build something awesome", done: true },
  ]);

  function handleChange(e, item) {
    setItems((prevItems) =>
      prevItems.map((loopitem) =>
        loopitem.text == item.text
          ? { ...loopitem, done: !loopitem.done }
          : loopitem
      )
    );
  }

  function reducer(state, action) {
    if (action == "add") {
      return state + 1;
    } else if (action == "subtract") {
      return state - 1;
    } else {
      return initialState;
    }
  }

  return (
    <div className={`container mt-5 ${localStorage.getItem("theme")}`}>
      <h2>Todos:</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => handleChange(e, item)}
                checked={item.done}
              />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
      </ol>

      <br></br>
      <br></br>

      <div className="counter-app">
        <h1>Count - {count_value}</h1>
        <br></br>

        <div className="d-flex gap-4">
          <Button variant="primary" onClick={() => dispatch("add")}>
            Add
          </Button>
          <Button variant="warning" onClick={() => dispatch("subtract")}>
            Subtract
          </Button>
          <Button variant="danger" onClick={() => dispatch("reset")}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
