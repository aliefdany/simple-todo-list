const TodoList = ({ list }) => {
  return list.map((todo) => <li key={todo}>{todo}</li>);
};

export default TodoList;
