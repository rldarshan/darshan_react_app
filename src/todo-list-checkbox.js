import {useState} from 'react';

export default function TodoApp() {
  const [items, setItems] = useState([
    { text: "Learn JavaScript", done: false },
    { text: "Learn React", done: false },
    { text: "Play around in JSFiddle", done: true },
    { text: "Build something awesome", done: true },
  ]);

  function handleChange(e, item) {
    /* console.log("===== 1 =====",item)
         // e.target.checked = e.target.checked
          item.done = !item.done;
          
          let tempItems = [...items];
          
          tempItems.forEach(loopitem => { if (loopitem.text == item.text) {
           console.log(loopitem)
            loopitem.done = !loopitem.done;
          } })
          
          setItems(tempItems)
   console.log("===== 2 =====",tempItems) */

    setItems((prevItems) =>
      prevItems.map((loopitem) =>
        loopitem.text == item.text
          ? { ...loopitem, done: !loopitem.done }
          : loopitem
      )
    );
  }

  return (
    <div>
      <h2>Todos:</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
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

// ReactDOM.render(<TodoApp />, document.querySelector("#app"));
