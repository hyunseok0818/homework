// src/App.js
import React, { useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // 할 일 추가 핸들러
  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    inputRef.current.focus();
  };

  // 할 일 삭제 핸들러
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} inputRef={inputRef} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
