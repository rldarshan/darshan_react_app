import "../styles/styles.scss";
import React, { useState, useEffect } from 'react';

const Board = ({ rows, columns, mines }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const initializeBoard = () => {
      const board = Array(rows).fill().map(() => Array(columns).fill(0));

      // Place mines
      let minesPlaced = 0;
      while (minesPlaced < mines) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * columns);
        if (board[row][col] !== 'X') {
          board[row][col] = 'X';
          minesPlaced++;
        }
      }

      // Calculate numbers
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          if (board[row][col] === 'X') continue;
          let mineCount = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = row + i;
              const newCol = col + j;
              if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < columns && board[newRow][newCol] === 'X') {
                mineCount++;
              }
            }
          }
          board[row][col] = mineCount;
        }
      }

      setBoard(board);
    };

    initializeBoard();
  }, [rows, columns, mines]);

  return (
    <div className="mines-app">
      {board.map((row, rowIndex) => (
        <div className="outerdiv" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="innerdiv"
            >
              {cell === 'X' ? <span className="mine-spot"> M </span> : cell}
            </div>
              // 💣
          ))}
        </div>
      ))}
    </div>
  );
};

const MinesApp = () => {
  return <Board rows={5} columns={5} mines={3} />;
};

export default MinesApp;
