import React from "react";

const TodoItem = ({ item, onDel, onToggle }) => {
  const { id, text, isChk } = item;

  return (
    <li className={isChk === true ? "on" : null}>
      <span onClick={() => onToggle(id)}>✔</span>
      <em onClick={() => onToggle(id)}>{text}</em>
      <button onClick={() => onDel(id)}>🗑</button>
    </li>
  );
};

export default TodoItem;
