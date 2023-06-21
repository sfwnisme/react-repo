import React, { useState } from "react";
import useCount from "./useCount";

const Counter = () => {
  const [count, setCount] = useState(0);
  useCount(count);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
