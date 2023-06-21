import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const empty = (e) => {
    e.preventDefault();
    setValue(initialValue);
  };
  const bind = {
    value,
    type: "text",
    onChange: (e) => setValue(e.target.value),
  };
  return [value, empty, bind];
};

export default useInput;
