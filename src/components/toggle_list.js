import React, { useState } from 'react';
import {BtnComponent} from './App';

const ToggleList = ({ messages }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const renderMessages = (messages, level = 0) => {
    return messages.map((message, index) => {
      const isOpen = openIndexes.includes(index);

      return (
        <div key={index} style={{ marginLeft: `${level * 20}px` }}>
          {message.children ? (
            <>
              <div onClick={() => handleToggle(index)}>
                {isOpen ? '-' : '+'} {message.text}
              </div>
              {isOpen && renderMessages(message.children, level + 1)}
            </>
          ) : (
            <div>{message.text}</div>
          )}
        </div>
      );
    });
  };

  return <div>{renderMessages(messages)}</div>;
};

// Example usage of ToggleList Component
const messagesData = [
  {
    text: 'Message 1',
    children: [
      { text: 'Message 2' },
      {
        text: 'Message 4',
        children: [
          { text: 'Message 6' },
          { text: 'Message 7' },
        ],
      },
    ],
  },
  { text: 'Message 5' },
];

const Toggle_List = () => {
  const handleClick = () => {
    alert('This message is comming from toggle_list component.')
  }

  return (
    <div className='container mt-5'>
      <BtnComponent handleClick={handleClick} />
      <br />
      <h1>Toggle List of Messages</h1>
      <ToggleList messages={messagesData} />
    </div>
  );
};

export default Toggle_List;

