import todo from "../model/todos.js";

export const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const markTodoDone = async (request, response) => {
  try {
    const todoRef = await todo.findById(request.params.id);
    const todo_done = await todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );
    await todo_done.save();
    return response.status(200).json(todo_done);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todo_delete = await todo.findOneAndDelete({ _id: request.params.id });
    return response.status(200).json(todo_delete);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
