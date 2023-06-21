import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
  }
};

const useCounter = (initialState) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return [count, dispatch];
};

export default useCounter;
