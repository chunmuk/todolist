import React, { useRef, useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return textRef.current.focus();
    }
    onAdd(text);
    setText("");
    textRef.current.focus();
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={changeInput}
        ref={textRef}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
