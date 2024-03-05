import { configureStore } from "@reduxjs/toolkit";

import { todosReducers } from "./reducers/todosReducers";

const store = configureStore({
  reducer: {
    todos: todosReducers,
  },
});

export default store;
