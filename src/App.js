// import "./styles.css";
import React, { useState } from "react";
// import { messages } from "./messages";

export const messages = [
  {
    id: 1,
    text: "message 1",
    children: [
      {
        id: 3,
        text: "message 3",
      },
    ],
  },
  {
    id: 2,
    text: "message 2",
    children: [
      {
        id: 4,
        text: "message 4",
        children: [
          {
            id: 7,
            text: "message 7",
          },
          {
            id: 8,
            text: "message 8",
          },
        ],
      },
      {
        id: 5,
        text: "message 5",
      },
    ],
  },
];


function App() {
  // const childRef = useRef();
  const [itemData, setItemData] = useState();

  // Task is quite ordinary:
  //
  // 1) import messages.ts file here
  // 2) show results as "toggle list"

  // + message 1
  // - message 2
  //   + message 4
  //   message 5

  function showChild(itemData) {
    console.log(itemData.id);

    // itemData.forEach((child) => {
    //   childElement = document.getElementById(child.id);
    //   childElement.style.display = "block";
    // });
  }

  return (
    <>
      {messages.map(function (item) {
        return (
          <>
            <div id={item.id} key={item.id} className="msg_list" onClick={() => showChild(item)}>
              {item.hasOwnProperty("children") ? "+" : ""}
              {item.text}
            </div>
            <dd>
              <ChildComponent item={item} />
            </dd>
          </>
        );
      })}
      <h1>Write your solution here!</h1>
    </>
  );
}

export default App;

function ChildComponent(item) {
  return (
    <>
      {item.hasOwnProperty("children") ? (
        item.children.map(function (child) {
          return (
            <div className="nested_child"
              id={child.id}
              key={item.id}
              style={{ display: "none" }}
            >
              {child.hasOwnProperty("children") ? "+" : ""}
              {child.text}
            </div>
          );
        })
      ) : (
        <div className="nested_child">{item.text}</div>
      )}
    </>
  );
}
