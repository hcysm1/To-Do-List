import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); //getting the stored state from redux store

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
