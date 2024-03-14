import { toggleTodo, deleteTodo, editTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(editTodo(todo._id, text));
  };

  return (
    <li className="task" onDoubleClick={() => setEditing(true)}>
      <span className="done" onClick={() => dispatch(toggleTodo(todo._id))}>
        {todo.done ? (
          <i className="material-symbols-outlined">check_circle</i>
        ) : (
          <i className="material-symbols-outlined"> radio_button_unchecked</i>
        )}
      </span>
      <span
        className={todo.done ? "complete" : "incomplete"}
        style={{ display: editing ? "none" : "" }}
      >
        {todo.data}
      </span>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="material-symbols-outlined">delete</i>
      </span>

      <span className="icon">
        <i
          className="material-symbols-outlined"
          onClick={() => setEditing((prevState) => !prevState)}
        >
          edit
        </i>
      </span>
    </li>
  );
};

export default Todo;
