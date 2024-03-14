import { configureStore } from "@reduxjs/toolkit";

import { todosReducers } from "./reducers/todosReducers";
import { tabReducers } from "./reducers/tabReducer";

const store = configureStore({
  reducer: {
    todos: todosReducers,
    currentTab: tabReducers,
  },
});

export default store;
