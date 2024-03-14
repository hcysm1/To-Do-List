import { useEffect } from "react";
import { getAllTodos } from "../redux/actions";
import {
  ALL_TODOS,
  COMPLETED_TODOS,
  ACTIVE_TODOS,
} from "../redux/actions/type";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); //getting the stored state from redux store
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === COMPLETED_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
