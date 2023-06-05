import FormControls from "./FormControls";
import { Link, useNavigate } from "react-router-dom";
import { loginInputs } from "../../ui/constants";
import useInput from "../../hooks/useInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { CheckCircle, Warning } from "@mui/icons-material";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.user);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => {
      clearTimeout(identifier);
    };
  }, [error]);

  const {
    entered: email,
    inputChange: emailChangeHandler,
    errorMsg: emailErrorMsg,
    setErrorMsg: setEmailErrorMsg,
    isValid: emailIsValid,
  } = useInput((email) =>
    String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  );
  const {
    entered: password,
    inputChange: passwordChangeHandler,
    errorMsg: passwordErrorMsg,
    setErrorMsg: setPasswordErrorMsg,
    isValid: passwordIsValid,
  } = useInput((password) => password.trim().length >= 6);

  const clickHandler = () => {
    if (!email) setEmailErrorMsg("Enter your email");
    else if (!emailIsValid)
      setEmailErrorMsg(
        "Wrong or Invalid email address. Please correct and try again."
      );

    if (!password) setPasswordErrorMsg("Minimum 6 characters required");
    else if (password.length < 6)
      setPasswordErrorMsg("Minimum 6 characters required");
  };

  const authAccountHandler = async (event) => {
    event.preventDefault();
    if (!emailIsValid || !passwordIsValid) return;
    try {
      setIsLoading(true);
      setError(null);
      const userCredintial = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredintial.user;
      dispatch(
        authActions.signIn({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        })
      );
      setSuccessMsg("Welcome");
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMsg(null);
        navigate("/");
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      const errorMsg = err.message;
      console.log(errorMsg);
      if (errorMsg.includes("Firebase: Error (auth/wrong-password)")) {
        setError("Wrong password!");
      }
      if (errorMsg.includes("Firebase: Error (auth/user-not-found).")) {
        setError("User not found!");
      }
      if (
        errorMsg.includes(
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        )
      ) {
        setError("Account has been temporarily disabled!");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={authAccountHandler}
        className="relative p-4 border border-slate-200 w-full mx-auto font-roboto sml:w-[340px]"
      >
        <h1 className="text-3xl mb-4">Sign in</h1>
        <FormControls
          input={{
            ...loginInputs[0],
            value: email,
            onChange: emailChangeHandler,
            errormsg: emailErrorMsg,
          }}
        />
        <FormControls
          input={{
            ...loginInputs[1],
            value: password,
            onChange: passwordChangeHandler,
            errormsg: passwordErrorMsg,
          }}
        />
        <button
          onClick={clickHandler}
          className="amazon-shadow w-full py-1 rounded-md border border-slate-400 disabled:bg-slate-500"
        >
          Continue
        </button>
        {isLoading && (
          <div className="text-center flex items-center pt-4 justify-center">
            <Loader />
          </div>
        )}
      </form>
      <div className="text-sm flex flex-col items-center py-4 font-roboto w-full sml:w-[340px] px-4">
        <h3 className="relative mb-4 text-center z-20">New to Amazon?</h3>
        <Link
          to="/register"
          className="block bg-gradient-to-br from-slate-200 to-slate-300 hover:from-slate-300 hover:to-slate-400 w-full sml:w-[340px] text-center p-1 rounded-md duration-300"
        >
          Create your Amazon account
        </Link>
        {error && (
          <div className="absolute bg-gray-50 top-px border border-gray-200 right-0 min-w-[200px] max-w-[400px] text-center modal-open">
            <p className="alert before:bg-red-700 py-4 px-2 items-center gap-1">
              <span className="text-red-700">
                <Warning />
              </span>
              {error}
            </p>
          </div>
        )}
        {successMsg && (
          <div className="absolute bg-gray-50 top-px border border-gray-200 right-0 min-w-[200px] max-w-[400px] text-center modal-open">
            <p className="alert before:bg-green-600 py-4 px-2 flex items-center gap-1">
              <span className="text-green-600">
                <CheckCircle />
              </span>
              {successMsg} {authState.displayName}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginForm;
