import { useState } from "react";

const useInput = (validate) => {
  const [entered, setEntered] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const isValid = validate(entered);

  const inputChange = (event) => {
    setEntered(event.target.value);
    setErrorMsg(null);
  };

  return {
    entered,
    errorMsg,
    isValid,
    setEntered,
    inputChange,
    setErrorMsg,
  };
};

export default useInput;
