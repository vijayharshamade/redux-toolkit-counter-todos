import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { text, id } = props;
  console.log(text);
  const onDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <li className="todo-item">
        <p style={{ color: "red", fontWeight: "800", marginLeft: "20px" }}>
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
