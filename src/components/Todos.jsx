import "./index.css";
import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  console.log(todos);
  localStorage.setItem("todo", JSON.stringify(todos));
  //   const localTodos = JSON.parse(localStorage.getItem("todo"));
  //   You're calling directly in the component body, which means:It runs on every render, even before Redux state has updated.This can lead to stale or inconsistent data being stored.
  const [userInput, setUserInput] = useState("");
  const onHandleInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleAddTodo = () => {
    if (userInput.trim() === "") return;
    const first = userInput.slice(0, 1).toUpperCase();
    let formattedText = first + userInput.slice(1);
    dispatch(addTodo(formattedText));
    setUserInput("");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "350px",
        }}
      >
        <h1>Todos</h1>
        <div className="input-button">
          <input
            type="text"
            className="input"
            onChange={onHandleInput}
            value={userInput}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul className="todo-container">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              isChecked={todo.isChecked}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
