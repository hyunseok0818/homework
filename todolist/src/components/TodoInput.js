import React, { useState } from "react";

function TodoInput({ addTodo, inputRef }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
}

export default TodoInput;
