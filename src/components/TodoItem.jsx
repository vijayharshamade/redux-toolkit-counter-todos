import { deleteTodo, checkTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { text, id, isChecked } = props;
  console.log(text);
  const onDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <li className="todo-item">
        <div style={{ padding: "20px" }}>
          <input
            type="checkbox"
            checked={isChecked || false}
            onChange={() => dispatch(checkTodo(id))}
            style={{ transform: "scale(1.5)" }} // Optional: to make checkbox bigger
          />
        </div>
        <p
          style={{
            color: "red",
            fontWeight: "800",
            marginLeft: "20px",
            fontSize: "18px",
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {text}
        </p>
        <button className="delete-button" onClick={onDeleteTodo}>
          ❌
        </button>
      </li>
    </>
  );
};

export default TodoItem;
