import { useState } from "react";
import "./styles/index.scss";
import Button from "react-bootstrap/Button";

export default function TodoCheckList() {
  const [count, setCount] = useState(0);
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

  function handleCount(action) {
    if (action == "add") {
      setCount(count + 1);
    } else if (action == "subtract" && count) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div className="container mt-5">
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
        <h1>Count - {count}</h1>
        <br></br>

        <div className="d-flex gap-4">
          <Button variant="primary" onClick={() => handleCount("add")}>
            Add
          </Button>
          <Button variant="warning" onClick={() => handleCount("subtract")}>
            Subtract
          </Button>
          <Button variant="info" onClick={() => handleCount("reset")}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
