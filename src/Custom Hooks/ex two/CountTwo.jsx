import React, { useState } from "react";
import useCounter from "./useCounter";

const CountTwo = () => {
  const [count, increment, decrement, reset] = useCounter(0, 7);
  // const [count, increment, decrement, reset] = useCounter(0, 55);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CountTwo;
