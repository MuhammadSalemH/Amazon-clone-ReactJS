import React from "react";

const FormControls = ({ input, showAlert }) => {
  const { label, errormsg: errorMsg, alert } = input;

  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block font-roboto font-semibold text-sm mb-1"
      >
        {label}
      </label>
      <input
        {...input}
        id={label}
        className={`amazon-input ${
          errorMsg
            ? "ring-1 ring-red-500 border-transparent hover:shadow-none hover:ring-2"
            : ""
        }`}
      />
      {errorMsg && (
        <p className="text-xs pt-2 text-[#dd0000] font-semibold">
          <span className="italic font-extrabold mr-2">!</span>
          {errorMsg}
        </p>
      )}
      {showAlert && !errorMsg && (
        <p className="text-xs pt-2 text-zinc-500">
          <span className="italic font-extrabold mr-2 text-indigo-500 ">i</span>
          {alert}
        </p>
      )}
    </div>
  );
};

export default FormControls;
