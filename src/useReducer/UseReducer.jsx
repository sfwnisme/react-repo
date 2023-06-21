import axios from "axios";
import { useEffect, useReducer, useState } from "react";

const initialState = {
  isLoad: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { isLoad: false, error: "", post: action.payload };
    case "FETCH_ERROR":
      return { isLoad: false, error: action.payload, post: {} };
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        console.log(
          dispatch({ type: "FETCH_SUCCESS", payload: response.data })
        );
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
        console.log(error);
      });
  }, []);
  return (
    <div>
      {state.isLoad ? <mark>Loading...</mark> : <p>{state.post.title}</p>}
      {state.error ? state.error : null}
    </div>
  );
};
export default UseReducer;
