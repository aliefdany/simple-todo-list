export default TodoParamImp = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="input-todo">
        <input
          type="text"
          value={props.inputValue}
          placeholder="what to do?"
          onChange={props.handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
