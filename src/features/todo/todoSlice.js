import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //todos: [],
  todos: JSON.parse(localStorage.getItem("todo")) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    checkTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isChecked = !todo.isChecked; // toggle
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, checkTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
