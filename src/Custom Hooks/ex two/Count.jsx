import React, { useState } from "react";
import useCounter from "./useCounter";

const Count = () => {
  const [count, increment, decrement, reset] = useCounter(0, 5);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Count;
