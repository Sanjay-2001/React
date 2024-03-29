import React from "react";
import {  useCounter } from "../context/CounterContext";

function Counter() {
  const counterContext =useCounter();
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>{" "}
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
