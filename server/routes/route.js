import express, { request, response } from "express";
import {
  addTodo,
  getAllTodos,
  markTodoDone,
  deleteTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", markTodoDone);
route.delete("/todos/:id", deleteTodo);

export default route;
