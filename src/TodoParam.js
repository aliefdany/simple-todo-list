import { useState } from "react";
import TodoList from "./TodoList";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-todo">
          <input
            type="text"
            value={inputValue}
            placeholder="what to do?"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <ol>
        <TodoList list={list} />
      </ol>
    </div>
  );
};

export default TodoParam;
