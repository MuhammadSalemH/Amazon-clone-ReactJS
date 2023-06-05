import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArrowRight } from "@mui/icons-material";
import { regInputs } from "../../ui/constants";

import useInput from "../../hooks/useInput";
import FormControls from "./FormControls";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Loader from "../../ui/Loader";

const RegistarationForm = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);
  const navigate = useNavigate();
  const {
    entered: name,
    inputChange: nameChangeHandler,
    errorMsg: nameErrorMsg,
    setErrorMsg: setNameErrorMsg,
    isValid: nameIsValid,
    setEntered: setName,
  } = useInput((name) => name.trim() !== "");
  const {
    entered: email,
    inputChange: emailChangeHandler,
    errorMsg: emailErrorMsg,
    setErrorMsg: setEmailErrorMsg,
    isValid: emailIsValid,
    setEntered: setEmail,
  } = useInput((email) =>
    String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  );
  const {
    entered: password,
    inputChange: passwordChangeHandler,
    errorMsg: passwoedErrorMsg,
    setErrorMsg: setPasswordErrorMsg,
    isValid: passwordIsValid,
    setEntered: setPassword,
  } = useInput((password) => password.trim().length >= 6);
  const {
    entered: rePassword,
    inputChange: rePasswordChangeHandler,
    errorMsg: rePasswordErrorMsg,
    setErrorMsg: setRePasswordErrorMsg,
    isValid: rePasswordIsValid,
    setEntered: setRePassword,
  } = useInput(
    (rePassword) => rePassword.trim() !== "" && rePassword === password
  );

  // Rest Inputs
  const resetHandler = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  // Handler error mesaages
  const clickHandler = () => {
    if (!name) setNameErrorMsg("Enter your name");

    if (!email) setEmailErrorMsg("Enter your email");
    else if (!emailIsValid)
      setEmailErrorMsg(
        "Wrong or Invalid email address. Please correct and try again."
      );

    if (!password) setPasswordErrorMsg("Minimum 6 characters required");
    else if (!passwordIsValid)
      setPasswordErrorMsg("Minimum 6 characters required");

    if (rePassword !== password) {
      setRePasswordErrorMsg("Passwords must match");
    }
    if (password === rePassword) {
      setShowAlert(false);
    }
  };

  // submit form
  const registerNewAccountHandler = async (event) => {
    event.preventDefault();
    // validate;
    if (!nameIsValid || !emailIsValid || !passwordIsValid || !rePasswordIsValid)
      return;

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setSuccessMsg("Account created.");
        setTimeout(() => {
          navigate("/signin");
          setSuccessMsg(null);
          resetHandler();
        }, 2000);
      }
      setIsLoading(false);
    } catch (err) {
      const errorMsg = err.message;
      if (errorMsg.includes("auth/email-already-in-use")) {
        setTimeout(() => {
          navigate("/alert");
        }, 2000);
      }
    }
  };

  return (
    <form
      onSubmit={registerNewAccountHandler}
      className="p-4 border border-slate-200 w-full mx-auto font-roboto sml:w-[340px]"
    >
      <h1 className="text-3xl mb-4">Create account</h1>
      <FormControls
        input={{
          ...regInputs[0],
          value: name,
          onChange: nameChangeHandler,
          errormsg: nameErrorMsg,
        }}
      />
      <FormControls
        input={{
          ...regInputs[1],
          value: email,
          onChange: emailChangeHandler,
          errormsg: emailErrorMsg,
        }}
      />
      <FormControls
        showAlert={showAlert}
        input={{
          ...regInputs[2],
          value: password,
          onChange: passwordChangeHandler,
          errormsg: passwoedErrorMsg,
        }}
      />
      <FormControls
        input={{
          ...regInputs[3],
          value: rePassword,
          onChange: rePasswordChangeHandler,
          errormsg: rePasswordErrorMsg,
        }}
      />
      <button
        onClick={clickHandler}
        className="amazon-shadow w-full py-1 rounded-md border border-slate-400 mb-4"
      >
        Continue
      </button>
      {isLoading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      <p className="text-sm">
        Already have an account?
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign in
          <ArrowRight sx={{ fontSize: "20px" }} />
        </Link>
      </p>
      {successMsg && (
        <div className="absolute bg-gray-50 top-px border border-gray-200 right-0 min-w-[200px] max-w-[400px] text-center modal-open">
          <p className="alert before:bg-green-700 py-4 px-2">{successMsg}</p>
        </div>
      )}
    </form>
  );
};

export default RegistarationForm;
