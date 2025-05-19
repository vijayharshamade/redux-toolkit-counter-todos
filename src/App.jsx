import { useState } from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <Todos />
    </>
  );
}

export default App;
