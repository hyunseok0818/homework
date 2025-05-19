import React, { useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // 할 일 추가 핸들러
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // 새로운 할일 todos 배열에 추가
    inputRef.current.focus();
  };

  //삭제 핸들러는 구현못함

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} inputRef={inputRef} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
