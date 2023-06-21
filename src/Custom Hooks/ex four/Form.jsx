import React, { useState } from "react";
import useInput from "./useInput";

const Form = () => {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  const [firstName, firstNameEmpty, firstNameBind] = useInput("");
  const [lastName, lastNameEmpty, lastNameBind] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Is your name ${firstName} ${lastName}`);
    firstNameEmpty("");
    lastNameEmpty("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...firstNameBind} placeholder="first name" />
        <input {...lastNameBind} placeholder="last name" />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Form;
