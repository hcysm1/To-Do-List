import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");
  const onFormSubmit = () => {};
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="input"
        placeholder="Enter a new Item..."
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoForm;
