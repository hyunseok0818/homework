import React, { useState } from "react";

function TodoInput({ addTodo, inputRef }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTodo(inputValue);
    setInputValue(""); //입력부분 빈칸으로 만들기
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} //입력할 때마다 inputvalue 업데이트해준다
      />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
}

export default TodoInput;
