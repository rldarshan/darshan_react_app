import {useState} from 'react';
import './index.css'

export default function TodoApp() {
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

  return (
    <div className='container mt-5'>
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
    </div>
  );
}
