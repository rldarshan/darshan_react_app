// import React, { useState } from 'react';

// // Message Component
// const Message = ({ message, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div style={{ marginLeft: message.level * 20 }}>
//       <div onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? '-' : '+'} {message.text}
//       </div>
//       {isOpen && children}
//     </div>
//   );
// };

// // Toggle_List Component
// const Toggle_List = () => {
//   const messages = [
//     { id: 1, text: 'message 1', level: 0 },
//     { id: 2, text: 'message 2', level: 0 },
//     { id: 3, text: 'message 4', level: 1 },
//     { id: 4, text: 'message 5', level: 1 },
//   ];

//   return (
//     <div>
//       {messages.map((message, index) => (
//         <Message key={index} message={message}>
//           {message.level === 0 &&
//             messages
//               .filter((child) => child.level === message.level + 1)
//               .map((child, i) => <Message key={i} message={child} />)}
//         </Message>
//       ))}
//     </div>
//   );
// };

// export default Toggle_List;



import React, { useState } from 'react';

// ToggleList Component
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
  return (
    <div>
      <h1>Toggle List of Messages</h1>
      <ToggleList messages={messagesData} />
    </div>
  );
};

export default Toggle_List;

