import React from "react";
import useCounter from "./useCounter";

const Count = () => {
  const [count, dispatch] = useCounter(0);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Count;
