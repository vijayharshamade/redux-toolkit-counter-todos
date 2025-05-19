import { increment, decrement, reset } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  //console.log(count);

  //console.log(useSelector((state) => state));   // {counter: {value: 0}}

  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "30vw",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
