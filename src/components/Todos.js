import React, { useEffect, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todos.css";

const Todos = () => {
  useEffect(() => {
    const localData = localStorage.getItem("todo");
    if (localData) {
      const todoList = JSON.parse(localData).sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      if (todoList.length >= 1) {
        no.current = parseInt(todoList[0].id) + 1;
        setData(todoList);
      }
    }
  }, []);
  //고유번호
  const no = useRef(0);
  const [data, setData] = useState([]);
  // 삭제
  const onDel = (id) => {
    let newState = data.filter((item) => item.id != id);
    localStorage.setItem("todo", JSON.stringify(newState));
    setData(newState);
  };

  //추가
  const onAdd = (text) => {
    let newState = [
      ...data,
      {
        id: no.current++,
        text,
        isChk: false,
      },
    ];
    localStorage.setItem("todo", JSON.stringify(newState));
    setData(newState);
  };
  // 갱신
  const onToggle = (id) => {
    let newState = data.map((item) =>
      item.id === id ? { ...item, isChk: !item.isChk } : item
    );
    localStorage.setItem("todo", JSON.stringify(newState));
    setData(newState);
  };

  return (
    <div className="Todos">
      <h1>To Do List</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList data={data} onDel={onDel} onToggle={onToggle} />
    </div>
  );
};

export default Todos;
