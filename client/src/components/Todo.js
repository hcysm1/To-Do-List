import { toggleTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="task">
      <span className="done" onClick={() => dispatch(toggleTodo(todo._id))}>
        {todo.done ? (
          <i className="material-symbols-outlined">check_circle</i>
        ) : (
          <i className="material-symbols-outlined"> radio_button_unchecked</i>
        )}
      </span>
      <span className={todo.done ? "complete" : "incomplete"}>{todo.data}</span>
      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <i className="material-symbols-outlined">delete</i>
      </span>
      <span className="icon">
        <i className="material-symbols-outlined">edit</i>
      </span>
    </li>
  );
};

export default Todo;
