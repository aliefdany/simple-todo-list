import { useState } from "react";
import TodoList from "./TodoList";
import TodoParamImp from "./TodoParamImp";

const TodoParam = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    list.push(inputValue);
    setList(list);
    setInputValue("");
  }

  return (
    <div className="todo">
      <div>
        <TodoParamImp
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputValue={inputValue}
        />
        <ol>
          <TodoList list={list} />
        </ol>
      </div>
    </div>
  );
};

export default TodoParam;
