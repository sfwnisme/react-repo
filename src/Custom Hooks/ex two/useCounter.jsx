import React, { useState } from "react";

const useCounter = (initialState, value) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prev) => prev + value);
  };
  const decrement = () => {
    setCount((prev) => prev - value);
  };
  const reset = () => {
    setCount(initialState);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
